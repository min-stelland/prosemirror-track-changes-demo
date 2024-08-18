echo -e '\nmove files: *.csljson -> *.csl.json'
mmv \
  'node_modules/citeproc-plus/dist/assets/*.csljson' \
  'node_modules/citeproc-plus/dist/assets/#1.csl.json'

sed -i.bak -E 's|assets/([^"]+)\.csljson"|assets/\1.csl.json"|g' \
  node_modules/citeproc-plus/dist/*.js \
  node_modules/citeproc-plus/dist/*/*.js

