import styles from './PrettyJson.module.css';

export default function PrettyJson({ data, name }) {
  return (
    <div>
      <pre className={styles.pre}>
        <code>
          {name} : {JSON.stringify(data, null, 2)}
        </code>
      </pre>
    </div>
  );
}
