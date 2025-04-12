import json
import random

# Nodos extraídos manualmente desde la imagen (id, label, shape, active)
# Coordenadas estimadas para simular la estructura visual de la imagen
nodes_data = [
    ("1", "HEAL", "square", False, 100, 100),
    ("2", "HP", "circle", False, 200, 100),
    ("3", "ADR", "square", False, 300, 100),
    ("4", "M", "circle", False, 100, 200),
    ("5", "DL", "circle", True, 200, 200),
    ("6", "INTER", "square", False, 300, 200),
    ("7", "R", "circle", False, 400, 200),
    ("8", "TENS", "square", False, 50, 250),
    ("9", "WP", "circle", False, 0, 300),
    ("10", "HP", "circle", False, 100, 300),
    ("11", "SKIL", "circle", False, 100, 370),
    ("12", "CAP", "circle", False, 50, 420),
    ("13", "SKIL", "circle", False, 0, 470),
    ("14", "INST", "square", False, 100, 500),
    ("15", "WP", "circle", True, 200, 500),
    ("16", "H", "circle", False, 150, 420),
    ("17", "MIND", "circle", False, 200, 370),
    ("18", "R", "circle", False, 300, 300),
    ("19", "B", "circle", False, 250, 270),
    ("20", "M", "circle", False, 350, 250),
    ("21", "CARG", "square", False, 400, 250),
    ("22", "DL", "circle", False, 500, 300),
    ("23", "READ", "circle", False, 600, 300),
    ("24", "OPO", "square", False, 650, 350),
    ("25", "INI", "circle", False, 550, 400),
    ("26", "IC", "circle", False, 500, 450),
    ("27", "PARF", "square", False, 600, 500),
    ("28", "AC", "circle", False, 400, 500),
    ("29", "H", "circle", False, 300, 500),
    ("30", "CAP", "circle", False, 200, 600),
    ("31", "PROC", "square", False, 250, 550),
    ("32", "APUN", "square", False, 350, 400),
    ("33", "INI", "circle", False, 450, 350),
    ("34", "DE", "circle", False, 450, 300),
    ("35", "COU", "square", False, 350, 300),
    ("36", "A", "circle", False, 300, 350),
    ("37", "DE", "circle", False, 400, 350),
    ("38", "AC", "circle", False, 450, 375)
]

# Edges estimated from image (by labels or position)
edges_data = [
    ("1", "2"), ("2", "3"),
    ("1", "4"), ("4", "5"), ("5", "6"), ("6", "7"),
    ("8", "9"), ("9", "12"), ("12", "11"), ("11", "10"), ("10", "8"),
    ("12", "13"), ("13", "14"), ("14", "15"), ("15", "16"), ("16", "17"),
    ("17", "19"), ("19", "18"), ("18", "6"),
    ("5", "18"), ("18", "20"), ("20", "21"),
    ("21", "22"), ("22", "23"), ("23", "24"), ("24", "25"), ("25", "26"),
    ("26", "27"), ("27", "28"), ("28", "29"), ("29", "30"), ("30", "14"),
    ("31", "30"), ("31", "29"), ("31", "16"),
    ("32", "31"), ("32", "33"), ("33", "37"), ("37", "26"),
    ("34", "35"), ("35", "23"), ("34", "37"), ("36", "35"), ("36", "34"),
    ("33", "24"), ("34", "38"), ("38", "26")
]

# Construct the JSON structure
graph_json = {
    "elements": {
        "nodes": [
            {
                "data": {
                    "id": node_id,
                    "label": label,
                    "shape": shape,
                    "active": active
                },
                "position": {
                    "x": x,
                    "y": y
                }
            } for node_id, label, shape, active, x, y in nodes_data
        ],
        "edges": [
            {
                "data": {
                    "id": f"e{index}",
                    "source": source,
                    "target": target
                }
            } for index, (source, target) in enumerate(edges_data, start=1)
        ]
    }
}

# Save the result to a file
output_path = "grafo_completo.json"
with open(output_path, "w") as f:
    json.dump(graph_json, f, indent=2)

output_path