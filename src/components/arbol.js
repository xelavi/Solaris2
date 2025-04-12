

function exportGraph(cy) {
    const elements = cy.elements().jsons();
  
    const nodes = [];
    const links = [];
  
    elements.forEach(el => {
      if (el.group === 'nodes') {
        const pos = cy.getElementById(el.data.id).position();
        nodes.push({
          id: el.data.id,
          position: [Math.round(pos.y / 60), Math.round(pos.x / 60)],
          shape: el.data.shape || 'circle',
          text: el.data.label || '',
          active: el.data.active || false
        });
      } else if (el.group === 'edges') {
        const source = cy.getElementById(el.data.source).position();
        const target = cy.getElementById(el.data.target).position();
        links.push({
          from: {
            row: Math.round(source.y / 60),
            col: Math.round(source.x / 60)
          },
          to: {
            row: Math.round(target.y / 60),
            col: Math.round(target.x / 60)
          }
        });
      }
    });
  
    const jsonOutput = { nodes, links };
  
    // Download the result
    const blob = new Blob([JSON.stringify(jsonOutput, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "grafo_completo.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, initializing Cytoscape");
    
    // Check if cytoscape is loaded
    if (typeof cytoscape === 'undefined') {
      console.error("Cytoscape library not loaded!");
      return;
    }
    
    try {
      const cy = cytoscape({
        container: document.getElementById('cy'),
        
        elements: [
          // Nodes
          { data: { id: 'a', label: 'Nodo A' }, position: { x: 100, y: 100 } },
          { data: { id: 'b', label: 'Nodo B' }, position: { x: 300, y: 100 } },
          { data: { id: 'c', label: 'Nodo C' }, position: { x: 200, y: 250 } },
          
          // Edges
          { data: { id: 'ab', source: 'a', target: 'b' } },
          { data: { id: 'bc', source: 'b', target: 'c' } },
          { data: { id: 'ca', source: 'c', target: 'a' } },
        ],
        
        style: [
          {
            selector: 'node',
            style: {
              'label': 'data(label)',
              'text-valign': 'center',
              'text-halign': 'center',
              'background-color': '#61bffc',
             
              'width': 60,
              'height': 60,
              'color': '#000',
              'font-size': '12px',
              'border-width': 2,
              'border-color': '#333',
              'cursor': 'pointer'
            }
          },
          {
            selector: 'edge',
            style: {
              'width': 2,
              'line-color': '#999',
              'target-arrow-shape': 'triangle',
              'target-arrow-color': '#999',
              'curve-style': 'bezier'
            }
          }
        ],
        
        layout: {
          name: 'preset'
        }
      });
      
      console.log("Cytoscape initialized successfully");
      
      // Add click event for nodes
      cy.on('tap', 'node', function(evt) {
        const node = evt.target;
        const currentColor = node.style('background-color');
        const newColor = currentColor === 'red' ? '#61bffc' : 'red';
        node.style('background-color', newColor);
        console.log(`Node ${node.id()} clicked`);
      });
      
    } catch (error) {
      console.error("Error initializing Cytoscape:", error);
    }
  });