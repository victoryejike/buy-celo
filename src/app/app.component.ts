import { Component } from '@angular/core';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3 from 'web3';
import { newKitFromWeb3 } from '@celo/contractkit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'celoproject';

async connect() {
  const provider :any = new WalletConnectProvider({
      rpc: {
        44787: "https://alfajores-forno.celo-testnet.org",
        42220: "https://forno.celo.org",
      },
    });

    await provider.enable()
    const web3 = new Web3(provider);
    let kit = newKitFromWeb3(web3)

    kit.defaultAccount = provider.accounts[0]

    provider.on("accountsChanged", (accounts: []) => {
      console.log(accounts);
    });
}

// connect()
  
}
