/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import * as React from 'react'
import styled from '@emotion/styled'

export type SlowProps = {
	distance?: string | number
}

const SlowWrap = styled.div<SlowProps>`
	font-size: 3em;
	font-weight: bold;
	color: rgba(0, 0, 0, 0.6);
	transform: translateZ(-2px) scale(3);
	/* transform: translate(0px, ${(props) => props.distance}px) rotate(0deg) scale(1);  */
`
// question: 1.相对位置需要调, 2.这样处理的结果是不断生成css, 性能应该不太好
// perspective属性兼容性不行,只有chrome可以支持

const Slow: React.FC<SlowProps> = ({ distance = -100, children }) => {
	return (
		<SlowWrap distance={distance}>
			{children} <span>test</span>
		</SlowWrap>
	)
}

export default Slow
