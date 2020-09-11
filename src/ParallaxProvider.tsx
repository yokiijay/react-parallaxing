/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import * as React from 'react'

const ParallaxProvider: React.FC = ({ children }) => <div css={style}>{children ? children : null}</div>

const style = css`
	width: 100vw;
	height: 100vh;
	perspective: 1px;
	overflow-y: scroll;
`
export default ParallaxProvider
