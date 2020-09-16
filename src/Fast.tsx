import * as React from 'react'
import styled from '@emotion/styled'

const ParallaxTitle = styled.div`
	width: 50px;
	height: 50px;
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

const ParallaxText = styled.p``

export type FastProps = {
	title?: string | number
	text?: string | number
}

const Fast: React.FC<FastProps> = ({ title = 'title', text = '' }) => (
	<React.Fragment>
		<ParallaxTitle>{title}</ParallaxTitle>
		{text ? <ParallaxText>{text}</ParallaxText> : null}
	</React.Fragment>
)

export default Fast
