let InitialData = [
  {
    id: 'records-1',
    title: 'Babel',
    body: 'Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false
  },
  {
    id: 'records-2',
    title: 'Functional Component',
    body: 'Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false
  },
  {
    id: 'records-3',
    title: 'Modularization',
    body: 'Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false
  },
  {
    id: 'records-4',
    title: 'Lifecycle',
    body: 'Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false
  },
  {
    id: 'records-5',
    title: 'ESM',
    body: 'ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false
  },
  {
    id: 'records-6',
    title: 'Module Bundler',
    body: 'Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false
  },
  {
    id: 'records-7',
    title: 'Webpack',
    body: 'Bundler modul sumber terbuka dan gratis untuk JavaScript. Ini dibuat terutama untuk JavaScript, tetapi dapat mengubah aset front-end seperti HTML, CSS, dan gambar jika pemuat yang sesuai disertakan.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false
  },
  {
    id: 'records-8',
    title: 'Api',
    body: 'komunikasi antara klien dengan server untuk menyederhanakan implementasi dan perbaikan software.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false
  }
]

const RecordDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  return new Date(date).toLocaleDateString('id-ID', options)
}

const toCapitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

const RecordArticle = (html) => new DOMParser()
  .parseFromString(html, 'text/html')
  .documentElement.textContent


function AllRecord() {
  return InitialData
}

function getRecord(id) {
  const recordFound = InitialData.find((record) => record.id === id)
  return recordFound
}

function recordActive() {
  const recordActive = InitialData.filter((record) => !record.archived)
  return recordActive
}

function recordArchived() {
  const recordArchived = InitialData.filter((record) => record.archived)
  return recordArchived
}

function recordAdd({ title, body }) {
  InitialData = [...InitialData, {
    id: `InitialData-${+new Date()}`, title: title || '(untitled)', body, createdAt: new Date().toISOString(), archived: false
  }]
}

function recordDell(id) {
  InitialData = InitialData.filter((record) => record.id !== id)
}

function archiveRecord(id) {
  InitialData = InitialData.map((record) => {
    if (record.id === id) {
      return { ...record, archived: true }
    }
    return record
  })
}

function unarchiveRecord(id) {
  InitialData = InitialData.map((record) => {
    if (record.id === id) {
      return { ...record, archived: false }
    }

    return record
  })
}

function recordEdit({ id, title, body }) {
  const recordEdit = InitialData.find((record) => record.id === id)
  recordEdit.title = title
  recordEdit.body = body

  InitialData = InitialData.map((record) => {
    if (record.id === id) {
      return record
    }
    return record
  })
}
export {
  AllRecord,
  recordActive,
  recordArchived,
  recordDell,
  recordEdit,
  getRecord,
  archiveRecord,
  unarchiveRecord,
  recordAdd, 
  RecordDate,
  toCapitalize,
  RecordArticle
}
