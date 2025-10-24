import styled from 'styled-components';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useCallback } from "react";
import { okaidia } from '@uiw/codemirror-theme-okaidia';


function CodeMode({ value, onChange }) {
    const handleChange = useCallback((val) => {
        onChange(val);
    }, [onChange]);


  return (
    <Wrapper>
        <div className="codemode">
            <CodeMirror
                value={value}
                height="205px"
                theme={okaidia}
                extensions={[javascript({ jsx: true })]}
                onChange={handleChange}
            />
        </div>

    </Wrapper>
  )
}
export default CodeMode

const Wrapper = styled.section`

`;