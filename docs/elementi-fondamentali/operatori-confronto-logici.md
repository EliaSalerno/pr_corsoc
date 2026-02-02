# Operatori di confronto e logici

**Categoria:** Elementi fondamentali

Fonte: `README.md`

## Descrizione

- **Confronto**: `==`, `!=`, `>`, `<`, `>=`, `<=` (restituiscono 0 o 1).
- **Logici**: `&&` (and), `||` (or), `!` (not). Attenzione all’ordine di valutazione e all’uso di short-circuit (`&&`/`||`).

### Esempi
```c
if (a > b && b > 0) { /*...*/ }
if (!(x == 0)) { /*...*/ }
```

### Consigli
- Evitare confronti diretti con floating point; usare tolleranze.
