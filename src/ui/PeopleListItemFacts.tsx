import styled from "@emotion/styled";
import {css} from "@emotion/react";

interface PLIProps {
    gender?: string,
    age?: boolean,
}

export const PeopleListItemFacts = styled.div<PLIProps>`
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
  color: #212121;
  font-size: 12px;
  padding: 0 14px;
  margin-right: 10px;
  ${({gender}) =>
    gender === 'male' && css`background: #73D677`
}
  ${({gender}) =>
    gender === 'female' && css`background: #C956FF`
}
  ${({gender}) =>
    gender === 'hermaphrodite' && css`background: #F5DB13`
}
  ${({age}) =>
    age && css`background: #07D6F2`
}
`