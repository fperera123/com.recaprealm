import styled from "styled-components/macro"
import { Box, Heading, Paragraph } from "~styled"

const Content = styled(Box)`
`
Content.Title = styled(Heading)`
`
Content.Text = styled(Paragraph)`
`

Content.List = styled(Box)`
li {
    padding-left: 30px;
    position: relative;
    list-style: none;
    &::before{
        content: "\f00c";
        font-family: 'Font Awesome 5 Free';
        position: absolute;
        left: 0;
        top: 0;
        font-weight: 700;
        color:#5034fc;
    }
}
`

export default Content
