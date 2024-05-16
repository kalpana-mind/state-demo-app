import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function randomEmoji() {
  const choices = ['👩', '👧', '🧒', '👩‍🦰', '👩‍🦱', '👸'];
  return choices[Math.floor(Math.random() * choices.length)];
}

export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }]);
  const addEmoji = () => {
    setEmojis((oldEmojis) => {
      return [...oldEmojis, { id: uuid(), emoji: randomEmoji() }];
    });
  };

  const deleteEmoji = (id) => {
    setEmojis((oldEmojis) => {
      return oldEmojis.filter((e) => e.id !== id);
    });
  };

  const makeHeart = () => {
    setEmojis((allEmojis) => {
      return allEmojis.map((e) => {
        return { ...e, emoji: '♥' };
      });
    });
  };
  return (
    <div>
      {emojis.map((emo) => (
        <span
          onClick={() => deleteEmoji(emo.id)}
          key={emo.id}
          style={{ fontSize: '4rem' }}
        >
          {emo.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
      <button onClick={makeHeart}>Make them all hearts</button>
    </div>
  );
}
