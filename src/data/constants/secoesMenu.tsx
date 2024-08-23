import {
  IconNumbers, 
  IconUsers, 
  IconRefreshAlert, 
  IconArrowsRightLeft, 
  IconMathGreater, 
  IconLetterCase, 
  IconSection, 
  IconAppWindow, 
  IconDimensions,
  IconLock,
  IconShoppingCart,
  IconPin,
  IconForms,
  IconTextColor,
  IconColorSwatch,
  IconDatabase,
  IconDatabaseImport
  } from "@tabler/icons";

export const secoes = [
  {
      titulo: "Essenciais",
      aberta: false,
      itens: [
          { titulo: "Contador", url: "/essenciais/contador", tag: "useState", icone: <IconNumbers /> },
          { titulo: "Votação", url: "/essenciais/votacao", tag: "useState", icone: <IconUsers /> },
          { titulo: "Consulta à API", url: "/essenciais/consultaAPI", tag: "useEffect", icone: <IconArrowsRightLeft /> },
          { titulo: "Maior", url: "/essenciais/maior", tag: "useEffect", icone: <IconMathGreater /> },
          { titulo: "Contagem Caracteres", url: "/essenciais/contagemCaracteresEffect", tag: "useEffect", icone: <IconLetterCase /> },
          { titulo: "State vs Ref", url: "/essenciais/stateVsRef", tag: "useRef", icone: <IconRefreshAlert /> },
          { titulo: "Referenciando Elemento", url: "/essenciais/refElemento", tag: "useRef", icone: <IconSection /> },
          { titulo: "Contagem Caracteres", url: "/essenciais/contagemCaracteresRef", tag: "useRef", icone: <IconLetterCase /> },
      ],
  },
  {
      titulo: "Personalizados",
      aberta: false,
      itens: [
          { titulo: 'Modal', url: "/personalizados/modal", tag: "personalizados", icone: <IconAppWindow /> },
          { titulo: 'Tamanho', url: "/personalizados/tamanhoJanela", tag: "personalizados", icone: <IconDimensions /> },
          { titulo: 'Validando senha', url: "/personalizados/senha", tag: "personalizados", icone: <IconLock /> },
      ],
  },
  {
      titulo: "Contexto",
      aberta: false,
      itens: [
          { titulo: 'Loja', url: "/contexto/loja", tag: "useContext", icone: <IconShoppingCart /> },
      ],
  },
  {
      titulo: "Outros",
      aberta: true,
      itens: [
          { titulo: 'Memoizando elementos', url: "/outros/memoizacao", tag: "useMemo", icone: <IconPin /> },
          { titulo: 'Memoizando funções', url: "/outros/memoizandoFuncoes", tag: "useCallback", icone: <IconPin /> },
          { titulo: 'Memoizando uma referência', url: "/outros/formularioImperativeHandle", tag: "useImperativeHandle", icone: <IconForms /> },
          { titulo: 'Texto secreto', url: "/outros/texto", tag: "useLayoutEffect", icone: <IconTextColor /> },
          { titulo: 'Gerador de cor', url: "/outros/geradorDeCor", tag: "useLayoutEffect", icone: <IconColorSwatch /> },
          { titulo: 'Soma com useState', url: "/outros/somaState", tag: "useState", icone: <IconDatabase /> },
          { titulo: 'Soma com useReducer', url: "/outros/somaReducer", tag: "useReducer", icone: <IconDatabaseImport /> },
          { titulo: 'Formulario 1', url: "/outros/formularioId", tag: "useId", icone: <IconForms /> },
          { titulo: 'Formulario 2', url: "/outros/formularioId2", tag: "useId", icone: <IconForms /> },
      ],
  }
];

export default secoes;