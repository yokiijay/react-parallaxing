/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useEffect, createRef } from 'react'
import Fast from './Fast'
import Slow from './Slow'
import { FastProps } from './Fast'
import styled from '@emotion/styled'

export type BgProps = {
	bgc?: string
	img?: string // 添加背景图,后续调整
	speed?: string | number // 落差滚动速度
	distance?: string | number
}

const Parallax: React.FC<FastProps & BgProps> = ({ title, text, speed, bgc, img, distance, children }) => {
	return (
		<React.Fragment>
			<ParallaxContainer bgc={bgc}>
				<Fast title={title} text={text} />
				<Slow distance={distance}>{children}</Slow>
			</ParallaxContainer>
		</React.Fragment>
	)
}

const ParallaxContainer = styled.div<BgProps>`
	display: flex;
	flex-direction: row;
	place-content: center;
	place-items: center;
	flex-wrap: nowrap;
	flex: none;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	background-color: ${(props) => props.bgc || '#ffffff'};
	transform-style: preserve-3d;
	overflow: hidden;
	@media (max-width: 500px) {
		flex-direction: column;
	}
`

export default Parallax
