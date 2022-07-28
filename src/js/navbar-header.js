window.addEventListener('load', () => {
  web3.eth.getAccounts((error, accounts) => {
    if (!error) {
      const account = accounts[0]
      // shorten
      const shortenedAccount = account.substring(0,8) + '...'
      $('#connectedAccount').append(`<a style="color:white;">Account: ${shortenedAccount}</a>`)
    } else {
      console.error(error)
    }
  })
})
