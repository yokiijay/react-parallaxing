/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import * as React from 'react'
import Fast from './Fast'
import Low from './Slow'
import { FastProps } from './Fast'
import styled from '@emotion/styled'

export interface ParallaxProps {
	fw?: number | string
	fh?: number | string
	height?: number | string
	bgc?: string
}

const Parallax: React.FC<FastProps & ParallaxProps> = ({ order, height, bgc, fw, fh, children, ...props }) => {
	return (
		<Wrap height={height} bgc={bgc} {...props}>
			<Fast order={order} width={fw} height={fh} />
			<Low>{children}</Low>
		</Wrap>
	)
}

export type WrapProps = {
	width?: string | number
	height?: string | number
	bgc?: string
}

const Wrap = styled.div<WrapProps>`
	display: flex;
	flex-direction: row;
	place-content: center;
	place-items: center;
	height: ${(props) => (typeof props.height === 'number' ? `${props.height}px` : props.height)};
	text-transform: uppercase;
	background-color: ${(props) => props.bgc};
	overflow: hidden;
	@media (max-width: 500px) {
		flex-direction: column;
	}
`

export default Parallax
