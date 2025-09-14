import TopBar from '@/app/Components/TopBar'
import React from 'react'

const page = () => {
  return (
    <div>
      <TopBar />
      <div className='bg-red-100'>
        <div className='flex flex-col flex-1 max-w-[1500px] w-full mx-auto bg-amber-50 border-amber-200 border-solid border-[0.5px] overflow-hidden p-10'>
          <h1 className='text-center'>Lesson 0.1: Hiragana</h1>
          <br/>
          <h2 className='font-bold'>Welcome to the first step of your Japanese learning journey!</h2>
          <p>Learning Japanese will be an incredibly fun but challenging journey that will follow you for the rest of your life.</p>
          <p>After all, it is said that one never truly stops learning a language, and that is very much true for Japanese.</p>
          <p>But with the advancements of AI, reaching a high level of Japanese has never been faster.</p>
          <p>That's why AI will be used to help you solidify your understanding of Japanese via lessons quizzes and a tutor. (But don't worry! These lessons will be written by real people.)</p>
          <p>But before we dive into the intricacies of Japanese grammer, we have to start where the learners of any language must start: how to read. </p>
          <br/>
          <h3 className='font-bold'>The Japanese Writing System</h3>
          <p>Most languages have one writing system, such as the alphabet for English or Hangul for Korean.</p>
          <p>Japanese is unique in this aspect, as it has 3 writing systems: Hiragana, Katakana, and Kanji</p>
          <p>Hiragana and Katakana are both phonetic alphabets, meaning that each character represents a sound, similar to the alphabet.</p>
          <p>Kanji, on the other hand, are characters that represent ideas alongside a sound. These were derived from Chinese, which is why Japanese Kanji and Chinese look similar.</p>
          <p>Kanji is a real pain point for new learners and experienced Japanese speakers alike. But we will get to that in its respective lesson.</p>
          <p>For now, we will focus on Hiragana, the most basic of the 3 writing systems.</p>
          <br/>
          <h3 className='font-bold'>Hiragana</h3>
          <p>As stated before, hiragana is similar to the alphabet in that it is a phonetic writing systems where each character just represents a sound.</p>
          <p>Take a look at the hiragana chart below: </p>
          <p>chart here for the future</p>
          <br/>
          <p>Not so bad, right?</p>
          <p>As you can see, there are 46 basic characters in hiragana, each representing a different sound.</p>
          <p>And if you string these characters together, you can form words!</p>
          <p>For example, the word "sushi" is written as すし in hiragana, which is made up of the characters す (su) and し (shi).</p>
          <p>Another example is the word "neko" (cat), which is written as ねこ in hiragana, made up of the characters ね (ne) and こ (ko).</p>
          <p>However, hiragana goes a bit deeper than just those 46 characters you just saw.</p>
          <br />
          <h3 className='font-bold'>Dakuten and Handakuten</h3>
          <p>Dakuten ( ゛) and Handakuten ( ゜) are diacritical marks that can be added to certain hiragana characters to change their pronunciation.</p>
          <p>What are diacritical marks you may ask? Don't worry about it! Just know that these marks slightly change the prounciation of the character.</p>
          <p>Take a look at the chart below: </p>
          <p>another chart here</p>

          <br/>
          <p>These marks certainly do complicate things a bit, but with enough practice you will easily hammer them in.</p>
          <p>These sounds gives us access to new words, such as りんご (ringo) meaning apple and ともだち (tomodachi) meaning friend.</p>
          <p>However, there is one more layer of hiragana we need to cover.</p>
          <br/>
          <h3 className='font-bold'>Yoon</h3>
          <p>Yoon are combinations of hiragana characters that create new sounds.</p>
          <p>These combinations are made up of a consonant + "i" sound hiragana character followed by a small "ya", "yu", or "yo" character.</p>
          <p>Yoon can also include the diacritical marks we talked about above.</p>
          <p>Take a look at the (final) chart below:</p>
          <p>yoon chart here</p>

          <br/>
          <p>These new sounds give us access to even more words, such as きょう (kyou) meaning today and しゃしん (shashin) meaning photo.</p>
          <br/>
          <p>And with just that, you are able to read a good chunk of Japanese! (Although you won't understand any of it without knowing grammer.)</p>
          <p>This is where AI comes in! Below is an AI generated quiz that will test you on random hiragana characters. Completing this will unlock the next lesson: Katakana. </p>
          <p>がんばれ！ (Good luck!)</p>
          <br/>
        </div>
      </div>
    </div>
  )
}

export default page
