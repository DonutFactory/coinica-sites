import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from "web3";

export const getProvider = () => {
  return detectEthereumProvider();
}

export const ethEnabled = async () => {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      window.web3 = new Web3(window.ethereum);
      return true;
    } catch (err) {
      return false
    }
  }
  return false;
}

export const disableETH = () => {
  if (window.ethereum) {
    try {
      window.web3 = null;
      return true;
    } catch (err) {
      return false
    }
  }
  return false;
}

export const getAccounts = (params, responseHandler, errorHandler) => {
  window.ethereum
    .request({
      method: 'eth_requestAccounts',
      params: [
        {
          eth_accounts: {}
        }
      ]
    })
    .then(responseHandler)
    .catch(errorHandler);
}

export const getBalance = (params, responseHandler, errorHandler) => {
  window.ethereum
    .request({
      method: 'eth_getBalance',
      params
    })
    .then(responseHandler)
    .catch(errorHandler);
}

export const getTransactionByHash = (params, responseHandler, errorHandler) => {
  window.ethereum
    .request({
      method: 'eth_getTransactionByHash',
      params
    })
    .then(responseHandler)
    .catch(errorHandler);
}

export const sendTransaction = (params, responseHandler, errorHandler) => {
  window.ethereum
    .request({
      method: 'eth_sendTransaction',
      params
    })
    .then(responseHandler)
    .catch(errorHandler);
}

export const getChainId = (params, responseHandler, errorHandler) => {
  window.ethereum
    .request({
      method: 'eth_chainId',
      params
    })
    .then(responseHandler)
    .catch(errorHandler);
}

export const onAccountChange = (callback) => {
  window.ethereum.on('accountsChanged', callback);
}

export const onChainChange = (callback) => {
  window.ethereum.on('chainChanged', callback);
}
