import Layout from 'components/Layout'
import LetterSendingBox from "components/Main/LetterSendingBox";
import LetterBoxSelector from "components/Main/LetterBoxSelecter";
import LetterSummaryView from "components/Main/LetterSummaryView";
import { useState } from 'react';

function Home({ savedLetters, setSavedLetters }) {
    const [selectedCharacter, setSelectedCharacter] = useState("chiikawa");

    return <Layout >
        {/* 감싸진 내용이 Layout의 children props로 들어간다. */}
        <LetterSendingBox selectedCharacter={selectedCharacter} setSelectedCharacter={setSelectedCharacter} savedLetters={savedLetters} setSavedLetters={setSavedLetters}></LetterSendingBox>
        <LetterBoxSelector selectedCharacter={selectedCharacter} setSelectedCharacter={setSelectedCharacter}></LetterBoxSelector>
        <LetterSummaryView selectedCharacter={selectedCharacter}></LetterSummaryView>
    </Layout>

}

export default Home 