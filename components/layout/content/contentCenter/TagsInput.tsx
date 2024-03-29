import { useState } from 'react';
import { Textarea, Tooltip, Chip } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

export default function TagsInput() {
  const [tags, setTags]: any = useState([])
  const [collection, setCollection]: any = useState(false)

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
      <div className='grid grid-cols-12 w-full gap-2'>
        <div className='col-span-12 post-title'>
          <Textarea
            className=''
            placeholder="Pikçır'ın esprisi nedir?"
            maxLength={80}
            rightSection={
              <Tooltip label="80 karakter" position="top-end" withArrow>
                <div>
                  <IconAlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
                </div>
              </Tooltip>
            }
          />
        </div>
        <div className='col-span-12'>
          <div className='flex flex-col w-full bg-white border border-BF4565 rounded p-2'>
            <div className="w-full flex items-center flex-wrap gap-2">
              {tags.map((tag: any, index: number) => (
                <div className="bg-white inline-block border-BF4565 border p-2 h-auto rounded-full placeholder:text-003049 text-003049 text-xs " key={index}>
                  <span className="text">#{tag}</span>
                  <span className="h-4 w-4 bg-BF4565 text-white rounded-full inline-flex justify-center items-center ml-2 text-base cursor-pointer" onClick={() => removeTag(index)}>&times;</span>
                </div>
              ))}
              {tags.length < 5 &&
                <input
                  onKeyDown={handleKeyDown}
                  type="text"
                  className="tags-input border-none outline-none bg-transparent text-xs w-auto flex-grow min-h-[35px] placeholder:text-202124 text-202124 font-bold"
                  placeholder={tags.length !== 0 ? 5 - tags.length + " tag daha ekle" : '5 tag ekle'} />
              }
            </div>
          </div>
        </div>
        <div className='col-span-12 grid grid-cols-12 w-full'>
          <div className='flex gap-2 chip-item col-span-12 lg:col-span-3 min-h-[30px] lg:justify-center items-center mx-auto'>
            <Chip onChange={()=> setCollection(collection === false ? true : false)}><span>Koleksiyona Ekle</span></Chip>
          </div>
          {collection &&
            <div className='col-span-12 lg:col-span-9 mt-2 lg:mt-0'>
              <select className='w-full min-h-[30px] rounded border border-BF4565 text-sm'>
                <option value={1}>Whatsapp Resimleri</option>
              </select>
            </div>
          }
        </div>
        <div className='col-span-12 my-auto'>
          <button className={`w-full h-full flex text-center justify-center items-center rounded font-bold text-white text-base max-w-[100px] mx-auto min-h-[40px] ${tags.length <= 0 ? 'bg-343a40 pointer-events-none' : 'bg-BF4565'}`} disabled={tags.length < 0}>Pikle!</button>
        </div>
      </div>
    </>
  )
}
