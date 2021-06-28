import avatar from './assets/img/avatar.png'
import ssDomi from './assets/img/ss-domi.jpg'
import ssRamah from './assets/img/ss-ramah.jpg'

function App() {
  return (
    <div className="text-gray-700">
      <nav className="p-3">
        <h1 className="font-bold text-xl text-primary ">CYRDODI</h1>
      </nav>

      {/* home */}
      <div className="flex justify-center items-center">
        <div>
          <div className="flex items-center px-4">
            <img src={avatar} alt="avatar" className="w-48" />
            <div className="ml-4">
              <h1 className="text-2xl text-primary font-bold">Dodi Yulian</h1>
              <p>Halo, saya Web Developer dari Pandeglang - Banten</p>
              <div className="mt-2">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=cdoditri@gmail.com" className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>cdoditri@gmail.com</span>
                </a>
                <a href="https://github.com/cyrdodi" className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                  <span>cyrdodi</span>
                </a>
                <a href="https://twitter.com/cyrdodi" className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
                  </svg>
                  <span>@cyrdodi</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* portofolio */}
      <div className="p-4 mt-16">
        <h2 className="text-lg font-semibold text-primary uppercase mb-4">Portofolio</h2>
        <div className="md:grid md:grid-cols-2  gap-3">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden flex mb-2">
            <img src={ssDomi} alt="screenshoot domi" className="w-48 object-cover" />
            <div className="p-4">
              <h3 className="text-primary font-semibold">DOMI-Daftar Online Misi</h3>
              <p className="mt-4">Web App pendaftaran online di RS Misi Lebak dengan nomor antrean yang terhubung dengan antrean onsite menggunakan API</p>
              <p className="mt-2">Stack: Codeigniter, Bootstrap</p>
              <p className="mt-2">Link: <a href="https://domi.misilebak.com">DOMI</a></p>
            </div>
          </div>
          <div className="bg-white shadow-xl rounded-lg overflow-hidden flex mb-2">
            <img src={ssRamah} alt="screenshoot domi" className="w-48 object-cover" />
            <div className="p-4">
              <h3 className="text-primary font-semibold">Ramah-Homecare</h3>
              <p className="mt-4">Website pemesanan layanan homecare oleh RS Misi Lebak</p>
              <p className="mt-2">Stack: Codeigniter, Bootstrap</p>
              <p className="mt-2">Link: <a href="https://ramah.misilebak.com">Ramah</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
