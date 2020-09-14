/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import * as React from 'react'
import styled from '@emotion/styled'

export type WraperProps = {
	width?: string | number
	height?: string | number
	direction?: 'row' | 'column'
}

const StyleWraper = styled.div<WraperProps>`
	display: flex;
	flex-direction: ${(props) => props.direction};
	width: ${(props) => (typeof props.width === 'number' ? `${props.width}vw` : props.width)};
	height: ${(props) => (typeof props.height === 'number' ? `${props.height}vh` : props.height)};
	overflow-x: ${(props) => (props.direction === 'row' ? 'scroll' : 'hidden')};
	overflow-y: ${(props) => (props.direction === 'row' ? 'hidden' : 'scroll')};
`

export interface ParallaxProvicerProps {
	width?: string | number
	height?: string | number
	direction?: 'row' | 'column'
}

const ParallaxProvider: React.FC<ParallaxProvicerProps> = ({
	width = 100,
	height = 100,
	direction = 'column',
	children,
}) => (
	<StyleWraper width={width} height={height} direction={direction} css={style}>
		{children
			? React.Children.map(children, (child: any) => {
					return React.cloneElement(child, {
						direction,
					})
			  })
			: null}
	</StyleWraper>
)

const style = css`
	perspective: 1px;
	-webkit-overflow-scrolling: touch;
`
export default ParallaxProvider
