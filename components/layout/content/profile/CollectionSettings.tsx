
import { Modal, TextInput } from '@mantine/core';
import { IconTrashFilled,IconAbc, IconSettings } from '@tabler/icons-react';
import { useState } from 'react';

export default function CollectionSettings() {
  const [collectionSettingsModal, setCollectionSettingsModal] = useState(false);
  return (
    <>
      <button className="text-202124 rounded text-sm font-bold justify-center items-center" title="Düzenle" onClick={() => setCollectionSettingsModal(true)}>
        <IconSettings size={16} />
      </button>
      <Modal opened={collectionSettingsModal} onClose={() => setCollectionSettingsModal(false)} centered title="Koleksiyon Düzenle">
        <div className="mt-2">
          <TextInput
            icon={<IconAbc size={15} />}
            type="text"
            label="Koleksiyon Adı"
            defaultValue={"Komik Resimler"}
          />
        </div>
        <div className="mt-4 flex justify-center items-center w-full gap-3">
          <div className='w-full'>
            <button className="w-full h-full flex text-center justify-center items-center rounded font-bold text-202124 text-sm max-w-[100px] mx-auto min-h-[36px] pointer-events-none gap-2"><IconTrashFilled size={15} /> Komple Sil</button>
          </div>
          <div className='w-full'>
            <button className="w-full h-full flex text-center justify-center items-center rounded font-bold text-white text-sm max-w-[100px] mx-auto min-h-[36px] bg-e15146 pointer-events-none">Güncelle</button>
          </div>
        </div>
      </Modal>
    </>
  )
}
