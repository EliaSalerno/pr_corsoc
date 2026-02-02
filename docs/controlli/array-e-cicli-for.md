# Gli array e i cicli For

**Categoria:** Controlli

Fonte: `README.md`

## Descrizione

Esempio di iterazione su array:
```c
int a[] = {1,2,3,4};
for (size_t i = 0; i < sizeof a / sizeof a[0]; ++i) {
    printf("%d\n", a[i]);
}
```

### Suggerimenti
- Calcolare la lunghezza con `sizeof` solo per array statici.
- Per array dinamici memorizzare la lunghezza separatamente.
