# Prime operazioni di I/O

**Categoria:** Elementi fondamentali

Fonte: `README.md`

## Descrizione

- **printf**: formattazione dell’output. Esempio: `printf("%d %s\n", i, s);`.
- **scanf**: lettura da stdin. Usare con cautela per evitare buffer overflow; preferire `fgets` + `sscanf` per stringhe.

### Esempio sicuro con stringhe
```c
char buf[100];
if (fgets(buf, sizeof buf, stdin)) {
    int n; if (sscanf(buf, "%d", &n) == 1) { /*...*/ }
}
```

### Buone pratiche
- Controllare i valori di ritorno di `scanf`/`fgets`.
- Usare formati corretti per evitare undefined behaviour.
