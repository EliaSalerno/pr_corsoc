# Array Multidimensionali

**Categoria:** Controlli

Fonte: `README.md`

## Descrizione

Esempio di array 2D statico:
```c
int m[3][4];
m[1][2] = 5;
```

Memorizzazione: riga-major (righe contigue in memoria). Per array dinamici 2D usare singolo blocco:
```c
int *m = malloc(rows * cols * sizeof *m);
m[r * cols + c] = 42;
```

### Vantaggi
- Accesso efficiente e compatto in memoria.
- Considerare cache locality quando si itera per colonne/righe.
