// import React, { useEffect, useState } from 'react';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#151716',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//   },
//   message: {
//     fontSize: 24,
//     paddingHorizontal: 25,
//     marginBottom: 180,
//     color: '#FFFFFF',
//   },
//   reshuffleButton: {
//     backgroundColor: '#84C2C9',
//     position: 'absolute',
//     bottom: 20,
//     alignSelf: 'center',
//     borderRadius: 15,
//     paddingVertical: 15,
//     paddingHorizontal: 160,
//   },
//   reshuffleText: {
//     borderColor: '#000',
//     fontSize: 20,
//   },
// });

export default function HomeScreen() {
 /* const [pocketPrompt, setPocketPrompt] = useState('');

  const handleGetPocketPrompt = async () => {
    try {
      const randomPocketPrompt = await axios.get(`${process.env.EXPO_PUBLIC_SERVER_URL}/pocketPrompt/get`, { timeout: 20000 });
      setPocketPrompt(randomPocketPrompt.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetPocketPrompt();
  }, []);
  */

  return (
    <h1>LA Hacks is fun!</h1>
  );
}