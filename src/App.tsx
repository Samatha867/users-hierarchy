import { useState } from 'react';
import styles from './App.module.css';
import { useAppState } from './hooks/useAppState';
import { getSubOrdinates } from './utils/getSubOrdinates';
import Container from './components/Container/Container';
import PrettyJson from './components/PrettyJson/PrettyJson';

function App() {
  const { roles, users } = useAppState();
  const [selUserId, setSelUserId] = useState<string>('');

  return (
    <>
      <header className={styles.header} id="main-header">
        <div className={styles.main}>
          <Container className={styles.container}>
            <div className={styles.section}>
              <h1>Users Hierarchy</h1>
            </div>
            <div className={styles.searchContainer}>
              <input
                aria-label="user-id-input"
                className={styles.composeInput}
                onChange={(e) => setSelUserId(e.target.value)}
                value={selUserId}
                placeholder="Enter user id here..."
              />
            </div>
          </Container>
        </div>
      </header>
      <div className={styles.page}>
        <PrettyJson data={users} name="Users" />
        <PrettyJson data={roles} name="Roles" />
        {selUserId && (
          <ul className={styles.tree}>
            <li>
              <div className={styles.sticky}>Sub Ordinates</div>
              <ul aria-label="sub-ordinates">
                {getSubOrdinates(selUserId, roles, users)?.map((sub) => (
                  <li key={sub.Id}>
                    <div className={styles.sticky}>{sub.Name}</div>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
