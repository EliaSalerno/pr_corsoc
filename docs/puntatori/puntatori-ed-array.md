# Puntatori ed Array

**Categoria:** I puntatori

Fonte: `README.md`

## Descrizione

In C il nome di un array si comporta come un puntatore al primo elemento (`a` ≈ `&a[0]`).

- **Aritmetica**: `p + i` si sposta di `i` elementi del tipo puntato: se `int *p` allora `p+1` aggiunge `sizeof(int)` bytes.

### Esempio
```c
int a[3] = {1,2,3};
int *p = a;
printf("%d\n", *(p+1)); // stampa 2
```

### Note
- Non confondere l’array (area allocata) con un puntatore modificabile; `a` non può essere riassegnato.
