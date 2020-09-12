import * as React from 'react'
import styled from '@emotion/styled'

export type StyleDivProps = {
	width?: number | string
	height?: number | string
}

const StyleDiv = styled.div<StyleDivProps>`
	width: ${(props) => (typeof props.width === 'number' ? `${props.width}px` : props.width)};
	height: ${(props) => (typeof props.height === 'number' ? `${props.height}px` : props.height)};
	margin-right: 100px;
	padding: 40px;
	color: rgba(0, 0, 0, 0.6);
	text-align: center;
	line-height: 1em;
	font-size: 3em;
	font-weight: bold;
	border-radius: 20px;
	background-color: rgba(255, 255, 255, 0.5);
	@media (max-width: 500px) {
		margin-right: 0;
		margin-bottom: 100px;
	}
`

export type FastProps = {
	order?: string | number
	width?: string | number
	height?: string | number
}

const Fast: React.FC<FastProps> = ({ order = 1, width = 50, height = 50 }) => (
	<StyleDiv width={width} height={height}>
		{order}
	</StyleDiv>
)

export default Fast
