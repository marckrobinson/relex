
::
:: Run this to install the node modules
::
@if not exist "siotest\node_modules" (
    pushd siotest
    npm install socket.io
    popd
)
