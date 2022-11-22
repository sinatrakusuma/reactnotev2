const appPage = {
    id: {
      title: 'CatatanXO',
      nav: {
        home: 'Beranda',
        archives: 'Arsip'
      },
      msg: {
        confirm: 'Anda yakin dengan ini?',
        loading: 'Mengambil data...',
        error: 'Ada kesalahan teknis. Coba lagi nanti.'
      },
      add: 'Menambahkan',
      cancel: 'Membatalkan',
      delete: 'Menghapus',
      archive: 'Mengarsipkan',
      active: 'Mengaktifkan',
      back: 'Kembali',
      pageNotFound: 'Halaman Yang Anda Tuju Tidak Ditemukan.'
    },
    en: {
      title: 'Xonote',
      nav: {
        home: 'Home',
        archives: 'Archives'
      },
      msg: {
        confirm: 'Are you sure?',
        loading: 'Loading...',
        error: 'Error. Try again later.'
      },
      add: 'Add',
      cancel: 'Cancel',
      delete: 'Delete',
      archive: 'Archive',
      active: 'Active',
      back: 'Back',
      pageNotFound: 'Page Not Found'
    }
  }
  
  const loginPage = {
    id: {
      header: 'Tolong masukan akun terlebih dahulu.',
      footer: 'anda belum punya memiliki akun?',
      footerRegisterLink: 'Daftar disini'
    },
    en: {
      header: 'please enter an account first.',
      footer: 'you don\'t have an account?',
      footerRegisterLink: 'Register here'
    }
  }
  
  const registerPage = {
    id: {
      header: 'Isi form untuk mendaftar akun.',
      footer: 'Sudah punya akun?',
      footerLoginLink: 'Login disini',
      msg: {
        registerSuccess: 'Akun berhasil dibuat. Silahkan login.'
      }
    },
    en: {
      header: 'Fill the form to register account.',
      footer: 'Already have an account?',
      footerLoginLink: 'Login here',
      msg: {
        registerSuccess: 'User created successfully.'
      }
    }
  }
  
  const notePage = {
    id: {
      header: 'Cari Record catatan aktif',
      searchPlaceholder: 'Cari Record dengan menggunakan judul ...',
      empty: 'Tidak ada record.'
    },
    en: {
      header: 'Look for active records',
      searchPlaceholder: 'Search Record by title ...',
      empty: 'Empty record.'
    }
  }
  
  const notesNewPage = {
    id: {
      titlePlaceholder: 'Judul',
      bodyPlaceholder: '<b><i><u>Isi Catatan</u></i></b>',
      msgSuccess: 'Berhasil menambahkan catatan!'
    },
    en: {
      titlePlaceholder: 'Title',
      bodyPlaceholder: '<b><i><u>Notes Content</u></i></b>',
      msgSuccess: 'Successfully add notes!'
    }
  }
  
  const notesIdPage = {
    id: {
      notFound: 'Catatan tidak ditemukan.'
    },
    en: {
      notFound: 'Not Found.'
    }
  }
  
  const archivePage = {
    id: {
      header: 'Catatan Arsip'
    },
    en: {
      header: 'Archived Notes'
    }
  }
  
  const content = {
    appPage,
    loginPage,
    registerPage,
    notePage,
    notesNewPage,
    notesIdPage,
    archivePage
  }
  
  export {
    appPage,
    loginPage,
    registerPage,
    notePage,
    notesNewPage,
    notesIdPage,
    archivePage
  }
  
  export default content
  