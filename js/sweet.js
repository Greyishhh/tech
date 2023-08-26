let timerInterval
Swal.fire({
  title: 'Let me load!',
  html: 'I will close in <b></b> milliseconds.',
  timer: 2000,
  timerProgressBar: true,
  allowEscapeKey: false,
  allowOutsideClick: false,
  allowEnterKey: false,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
   Swal.fire({
  title: 'Sweet!',
  confirmButtonText: "Continue",
  html: 'Thank you for waiting. The website is still under development. - <b>WolfHUB2022</b>',
  imageUrl: 'https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
}).then((result) => {
     if (result.isConfirmed) {
       const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  allowEscapeKey: false,
  allowOutsideClick: false,
  allowEnterKey: false,
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
  icon: 'success',
  title: 'Loaded successfully'
})
     }
}
        )}
})
