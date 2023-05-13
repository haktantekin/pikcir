import { useState } from 'react';
import { UnstyledButton } from '@mantine/core';

export default function TagsInput() {
  const [tags, setTags]: any = useState([])

  function handleKeyDown(e: any) {
    if (e.key === ' ') {
      e.preventDefault();
      return;
    }
    if (e.key === 'Enter' || e.key === 'Tab') {
      const value = e.target.value
      if (value.trim()) {
        setTags([...tags, value])
        e.target.value = ''
      }
      e.preventDefault();
    } else if (e.key === ' ') {
      e.preventDefault();
    }
    if (e.key === 'Backspace' && !e.target.value) {
      removeTag(tags.length - 1);
    }
  }

  function removeTag(index: number) {
    setTags(tags.filter((el: any, i: any) => i !== index))
  }
  return (
    <>
      <div className='flex flex-col w-full bg-white border border-e15146 rounded p-4'>
        <div className="w-full flex items-center flex-wrap gap-2">
          {tags.map((tag: any, index: number) => (
            <div className="bg-white inline-block border-e15146 border p-2 h-auto rounded-full placeholder:text-003049 text-003049 text-xs " key={index}>
              <span className="text">#{tag}</span>
              <span className="h-4 w-4 bg-e15146 text-white rounded-full inline-flex justify-center items-center ml-2 text-base cursor-pointer" onClick={() => removeTag(index)}>&times;</span>
            </div>
          ))}
          {tags.length < 5 &&
          <input
            onKeyDown={handleKeyDown}
            type="text"
            className="tags-input border-none outline-none bg-transparent text-sm w-auto flex-grow max-w-[100px] min-h-[30px] placeholder:text-202124 text-202124 font-bold"
            placeholder="Tag Gir" />
          }
        </div>
      </div>
      {tags.length > 0 &&
        <div>
          <UnstyledButton className="bg-e15146 w-24 flex text-center justify-center items-center h-9 rounded font-bold text-white text-base">Yollaa!</UnstyledButton>
        </div>
      }
    </>
  )
}
