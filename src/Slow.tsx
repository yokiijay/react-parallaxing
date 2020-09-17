/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import * as React from 'react'
import styled from '@emotion/styled'

export type SlowProps = {
	offset?: string | number
}

const SlowWrap = styled.div<SlowProps>`
	position: absolute;
	left: 70%;
	font-size: 3em;
	font-weight: bold;
	color: rgba(0, 0, 0, 0.6);
	transform: translate3d(-50%, 0px, -1px) scale(2);
	/* transform: translateZ(-2px) scale(3); */
	/* transform: translate(0px, ${(props) => props.offset}px) rotate(0deg) scale(1);  */
`
// question: 1.相对位置需要调, 2.这样处理的结果是不断生成css, 性能应该不太好

const Slow: React.FC<SlowProps> = ({ offset = 0, children }) => {
	return <SlowWrap offset={offset}>{children}</SlowWrap>
}

export default Slow
