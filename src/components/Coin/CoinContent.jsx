import * as React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, shorthands, Text } from '@fluentui/react-components';
import { Card, CardHeader } from '@fluentui/react-components';

const useStyles = makeStyles({
  card: {
    width: '360px',
    maxWidth: '100%',
    maxHeight: '160px',
    cursor: 'pointer',
    boxShadow: '6px 8px 4px rgba(0, 0, 0, 0.25)',
    backgroundColor: '#272829',
  },

  headerImage: {
    ...shorthands.borderRadius('4px'),
    maxWidth: '40px',
    maxHeight: '25px',
  },
  text: {
    ...shorthands.margin(0),
    fontSize: '12px',
  },
});

export default function CoinContent() {
  const styles = useStyles();
  const coins = useSelector((state) => state.coins.coins.coins);
  const nfts = useSelector((state) => state.coins.nfts.nfts);
  const currentTheme = useSelector((state) => state.theme.mode);

  return (
    <div className='h-screen flex flex-col items-center md:flex-row gap-5 '>
      <div className='flex flex-col'>
        <h2
          className={`text-4xl font-bold mb-8 ${
            currentTheme === 'dark' ? 'text-white' : 'text-black'
          }`}
        >
          Coins
        </h2>
        <div className='md:grid md:grid-cols-2 gap-5'>
          {coins.map((coin, index) => (
            <Card key={index} className={styles.card} s>
              <CardHeader
                image={
                  <img
                    className={styles.headerImage}
                    src={coin.item.thumb}
                    alt='App Name Document'
                  />
                }
                header={
                  <Text
                    style={{
                      fontSize: '15px',
                      color: '#fff',
                      fontWeight: 'bold',
                    }}
                  >
                    {coin.item.name}
                  </Text>
                }
              />

              <p className={styles.text} style={{ color: '#fff' }}>
                Donut chocolate bar oat cake. Dragée tiramisu lollipop bear
                claw. Marshmallow pastry jujubes toffee sugar plum.
              </p>
            </Card>
          ))}
        </div>
      </div>
      <div className='w-0 md:w-2' />
      <div className='flex flex-col'>
        <h2
          className={`text-4xl font-bold mb-8 ${
            currentTheme === 'dark' ? 'text-white' : 'text-black'
          }`}
        >
          NFTs
        </h2>
        <div className='md:grid md:grid-cols-2 gap-5'>
          {nfts.map((nft, index) => (
            <Card key={index} className={styles.card}>
              <CardHeader
                image={
                  <img
                    className={styles.headerImage}
                    src={nft.thumb}
                    alt='App Name Document'
                  />
                }
                header={
                  <Text
                    style={{
                      fontSize: '15px',
                      color: '#fff',
                      fontWeight: 'bold',
                    }}
                  >
                    {nft.name}
                  </Text>
                }
              />

              <p className={styles.text} style={{ color: '#fff' }}>
                Donut chocolate bar oat cake. Dragée tiramisu lollipop bear
                claw. Marshmallow pastry jujubes toffee sugar plum.
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
