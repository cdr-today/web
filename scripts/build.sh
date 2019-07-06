# SOURCE_DIR
if [[ "$(uname)" == 'Darwin' ]]; then
    SOURCE_DIR="$(dirname "$(dirname "$(realpath "$0")")")"
else
    SOURCE_DIR="$(dirname "$(dirname "$(readlink -f "$0")")")"
fi

function build() {
    rm -r "${SOURCE_DIR}/../docs"
    umi build
    mv "${SOURCE_DIR}/dist" "${SOURCE_DIR}/../docs"
}

build
