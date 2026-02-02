# Allocazione dinamica della Memoria (malloc)

**Categoria:** La gestione della memoria

Fonte: `README.md`

## Descrizione

`malloc` alloca memoria non inizializzata di dimensione specificata. Sempre controllare il valore ritornato.

### Esempio
```c
int *arr = malloc(n * sizeof *arr);
if (!arr) { perror("malloc"); exit(EXIT_FAILURE); }
/* uso */
free(arr);
```

### Buone pratiche
- Controllare `NULL` dopo `malloc`.
- Liberare la memoria con `free` quando non è più necessaria.
- Considerare `calloc` per memoria azzerata e `realloc` per ridimensionare.
