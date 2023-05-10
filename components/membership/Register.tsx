import { useState } from 'react';

export default function Register() {
  const [phoneNumber, setPhoneNumber] = useState('');
  function handlePhoneNumberChange(event: any) {
    let inputVal = event.target.value;
    // Girdi sadece sayı içermeli
    inputVal = inputVal.replace(/\D/g, '');
    // Telefon numarası formatına uygun hale getirilir
    if (inputVal.length > 0) {
      inputVal = inputVal.match(/(\d{1,3})(\d{1,3})?(\d{1,2})?(\d{1,2})?/);
      inputVal = `(${inputVal[1]}) ${inputVal[2] || ''}-${inputVal[3] || ''}-${inputVal[4] || ''}`;
    }
    setPhoneNumber(inputVal);
  }
  return (
    <>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col'>
          <label className='text-sm text-003049'>Kullanıcı Adı:</label>
          <input className='border-e5e5e5 border px-4 h-10 rounded mt-2 placeholder:text-003049 text-003049 text-sm' type="text" placeholder='profil linkinde yazacak' />
        </div>
        <div className='flex flex-col'>
          <label className='text-sm text-003049'>E Mail:</label>
          <input className='border-e5e5e5 border px-4 h-10 rounded mt-2 placeholder:text-003049 text-003049 text-sm' type="text" placeholder='mail adresin' />
        </div>
        <div className='flex flex-col'>
          <label className='text-sm text-003049'>Şifre:</label>
          <input className='border-e5e5e5 border px-4 h-10 rounded mt-2 placeholder:text-003049 text-003049 text-sm' type="password" placeholder='unutmayacağın bir şey gir' />
        </div>
        <div className='flex flex-col'>
          <label className='text-sm text-003049'>Telefonunu Çıkar:</label>
          <input className='border-e5e5e5 border px-4 h-10 rounded mt-2 placeholder:text-003049 text-003049 text-sm' type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} placeholder='başında 0 olmadan' />
        </div>
        <div className='flex flex-col'>
          <label className='text-sm text-003049'>Doğum Tarihin:</label>
          <div className='grid grid-cols-3 gap-3'>
            <div>
              <select className='border-e5e5e5 border px-4 h-10 rounded mt-2 placeholder:text-003049 text-003049 text-sm w-full'>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
              </select>
            </div>
            <div>
              <select className='border-e5e5e5 border px-4 h-10 rounded mt-2 placeholder:text-003049 text-003049 text-sm w-full'>
                <option>Ocak</option>
                <option>Şubat</option>
                <option>Mart</option>
                <option>Nisan</option>
                <option>Mayıs</option>
                <option>Haziran</option>
                <option>Temmuz</option>
                <option>Ağustos</option>
                <option>Eylül</option>
                <option>Ekim</option>
                <option>Kasım</option>
                <option>Aralık</option>
              </select>
            </div>
            <div>
              <select className='border-e5e5e5 border px-4 h-10 rounded mt-2 placeholder:text-003049 text-003049 text-sm w-full'>
                <option>2005</option>
                <option>2004</option>
                <option>2003</option>
                <option>2002</option>
                <option>2001</option>
                <option>2000</option>
                <option>1999</option>
                <option>1998</option>
                <option>1997</option>
                <option>1996</option>
                <option>1995</option>
                <option>1994</option>
                <option>1993</option>
                <option>1992</option>
                <option>1991</option>
                <option>1990</option>
              </select>
            </div>
          </div>
        </div>
        <button className='font-bold text-base text-003049 border border-003049 rounded py-2 px-10 mx-auto hover:bg-003049 hover:text-white' style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}>FİŞEKLE!</button>
      </div>
    </>
  )
}
