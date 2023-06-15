import ConfidentialityAgreementModal from '@/components/main/mustModal/ConfidentialityAgreementModal';
import CookiePolicyModal from '@/components/main/mustModal/CookiePolicyModal';
import TermOfServiceModal from '@/components/main/mustModal/TermOfServiceModal';
import { Menu, Modal } from '@mantine/core';
import { IconAward, IconCameraSearch, IconAwardFilled, IconBellRinging, IconHome2, IconPackage, IconListDetails, IconUserCircle } from "@tabler/icons-react";
import { useState } from 'react';

export default function ContentLeft() {
  const [disabled, setDisabled] = useState(false);
  function linkClick(value: boolean) {
    console.log(value);
    if (value === true) {
      document.getElementById('show-notification')?.click();
      setTimeout(() => {
        document.getElementById('show-all')?.click();
        setDisabled(false);
      }, 100);
    }
    else {
      setDisabled(true);
    }
  }

  const [termOfServiceModal, setTermOfServiceModal] = useState(false);
  const [confidentialityAgreementModal, setConfidentialityAgreementModal] = useState(false);
  const [cookiePolicyModal, setCookiePolicyModal] = useState(false);
  return (
    <>
      <div className='hidden lg:block relative col-span-2'>
        <div className='absolute left-0 w-full'>
          <div className="bg-white rounded w-full" style={{ gridAutoRows: "min-content", boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px' }}>
            <div className='home-left w-full'>
              <Menu>
                <Menu.Item href={"/home"} component="a" icon={<IconHome2 size={25} stroke={0.5} />} className="text-sm pb-0">
                  Ana Sayfa
                </Menu.Item>
                <Menu.Item icon={<IconBellRinging size={25} stroke={0.5} />} className="text-sm pb-0" onClick={() => linkClick(disabled === false ? true : false)}>
                  Bildirimlerim
                </Menu.Item>
                <Menu.Item href={"/explore"} component="a" icon={<IconCameraSearch size={25} stroke={0.5} />} className="text-sm pb-0">
                  Keşfet
                </Menu.Item>
                <Menu.Item href={"/profile"} component="a" icon={<IconPackage size={25} stroke={0.5} />} className="text-sm pb-0">
                  Koleksiyonlarım
                </Menu.Item>
                <Menu.Item href={"/profile"} component="a" icon={<IconUserCircle size={25} stroke={0.5} />} className="text-sm">
                  Profilim
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item href={"/lists"} component="a" icon={<IconListDetails size={25} stroke={0.5} />} className="text-sm pb-0">
                  Listeler
                </Menu.Item>
                <Menu.Item href={"/home"} component="a" icon={<IconAward size={25} stroke={0.5} />} className="text-sm pb-0">
                  Haftalık Yarışmalar
                </Menu.Item>
                <Menu.Item href={"/home"} component="a" icon={<IconAwardFilled size={25} stroke={0.5} />} className="text-sm">
                  Aylık Yarışmalar
                </Menu.Item>
              </Menu>
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-around mt-3 w-full pl-3 text-left">
            <button onClick={() => setTermOfServiceModal(true)} className="text-xs text-left">Hizmet Şartları</button>
            <button onClick={() => setConfidentialityAgreementModal(true)} className="text-xs text-left">Gizlilik Sözleşmesi</button>
            <button onClick={() => setCookiePolicyModal(true)} className="text-xs text-left">Çerez Politikası</button>
          </div>
        </div>
      </div>
      <Modal opened={termOfServiceModal} onClose={() => setTermOfServiceModal(false)} centered title="Hizmet Şartları"size={700}>
        <TermOfServiceModal />
      </Modal>
      <Modal opened={confidentialityAgreementModal} onClose={() => setConfidentialityAgreementModal(false)} centered title="Gizlilik Sözleşmesi"size={700}>
        <ConfidentialityAgreementModal />
      </Modal>
      <Modal opened={cookiePolicyModal} onClose={() => setCookiePolicyModal(false)} centered title="Çerez Politikası"size={700}>
        <CookiePolicyModal />
      </Modal>
    </>
  )
}