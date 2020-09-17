/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import * as React from 'react'
import styled from '@emotion/styled'

export type WraperProps = {
	width?: string | number
	height?: string | number
	direction?: 'row' | 'column'
	// ref?: any
	// distance: string | number
}

const StyleWraper = styled.div<WraperProps>`
	display: flex;
	flex-direction: ${(props) => props.direction};
	width: ${(props) => (typeof props.width === 'number' ? `${props.width}vw` : props.width)};
	height: ${(props) => (typeof props.height === 'number' ? `${props.height}vh` : props.height)};
	overflow-x: ${(props) => (props.direction === 'row' ? 'scroll' : 'hidden')};
	overflow-y: ${(props) => (props.direction === 'row' ? 'hidden' : 'scroll')};
	perspective: 1px;
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
}) => {
	// const ref = React.createRef<any>()
	// const [distance, setDistance] = React.useState<number>(1)
	// React.useEffect(() => {
	// 	ref.current.addEventListener('scroll', getDistance)
	// 	return () => {
	// 		ref?.current?.removeEventListener('scroll', getDistance)
	// 	}
	// }, [distance])
	// const getDistance = (e: any) => {
	// 	setDistance(e.target.scrollTop / 5)
	// }
	return (
		// <StyleWraper ref={ref} width={width} height={height} direction={direction}>
		<StyleWraper width={width} height={height} direction={direction}>
			{children
				? React.Children.map(children, (child: any) => {
						return React.cloneElement(child, {
							direction,
							// distance,
						})
				  })
				: null}
		</StyleWraper>
	)
}

export default ParallaxProvider
