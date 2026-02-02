# Gestione di una lista in C - Parte 1

**Categoria:** Le liste

Fonte: `README.md`

## Descrizione

Esempio base di lista collegata singolarmente:
```c
struct node { int val; struct node *next; };

void push(struct node **head, int v) {
    struct node *n = malloc(sizeof *n);
    n->val = v; n->next = *head; *head = n;
}
```

- **Inserimento**: in testa, in coda o in posizione.
- **Traversing**: scorrere con `for (p = head; p; p = p->next)`.
- **Cancellazione**: ricordare di free() i nodi rimossi.

### Nota
Gestire casi bordeline (lista vuota, un solo elemento) e liberare memoria correttamente.
