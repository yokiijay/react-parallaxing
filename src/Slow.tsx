/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import * as React from 'react'

const Low: React.FC = ({ children }) => <div css={style}>{children}</div>

const style = css`
	font-size: 3em;
	font-weight: bold;
	color: rgba(0, 0, 0, 0.6);
	transform: translateZ(-2px) scale(3);
`

export default Low
