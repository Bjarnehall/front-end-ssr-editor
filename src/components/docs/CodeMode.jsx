import styled from 'styled-components';
import CodeMirror from '@uiw/react-codemirror';

const code = 'const a = 0;';

function CodeMode() {
  return (
    <Wrapper>
        <div className="codemode">
            <CodeMirror
                value={code}
                options={{
                    theme: '',
                    keyMap: '',
                    mode: 'js',
                }}
            />
        </div>
    </Wrapper>
  )
}
export default CodeMode

const Wrapper = styled.section`
    .codemode {
        color: blue;
    }
`;