# Switch e operatori ternari: controlli condizionali in C

**Categoria:** Controlli

Fonte: `README.md`

## Descrizione

- **switch**: utile per selezioni su valori interi o enumerazioni. Ricordare `break` per evitare il fall-through (o usarlo intenzionalmente).

```c
switch (ch) {
  case 'a': handle_a(); break;
  case 'b': handle_b(); break;
  default: handle_default();
}
```

- **Operatore ternario** `?:` per espressioni compatte:
```c
int max = (a > b) ? a : b;
```

### Buone pratiche
- Evitare switch troppo lunghi: considerare tavole di funzioni.
- Usare ternario per espressioni semplici, non per logica complessa.
