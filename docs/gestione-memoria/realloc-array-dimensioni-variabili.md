# Realloc, array di dimensioni variabili

**Categoria:** La gestione della memoria

Fonte: `README.md`

## Descrizione

`realloc` ridimensiona un blocco precedentemente allocato con `malloc`/`calloc`.

### Esempio
```c
int *a = malloc(n * sizeof *a);
if (!a) exit(1);
int *b = realloc(a, new_n * sizeof *a);
if (!b) { free(a); /* gestire errore */ }
else a = b;
```

### Note
- `realloc` può restituire un nuovo puntatore; non usare il vecchio dopo successo.
- In caso di fallimento `realloc` ritorna `NULL` lasciando intatto il blocco originale.
