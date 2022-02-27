var elt = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elt, {expressionsCollapsed: true, settingsMenu: false, expressions: false, pasteGraphLink: true});
calculator.setExpression({ id: 'graph1', latex: '(b.yx)/(x-b.x)'});
calculator.setExpression({ id: 'graph2', latex: 'x=b.x', color: 'gray', lineOpacity: .6});
calculator.setExpression({ id: 'graph3', latex: 'y=b.y', color: 'gray', lineOpacity: .6});
calculator.setExpression({ id: 'point', latex: 'b=(1,1)', showLabel: true});