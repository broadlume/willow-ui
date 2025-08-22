import path from 'path'

export const cssplugin = {
    name: 'css',
    setup(build) {
        // Redirect all paths css or scss
        build.onResolve({ filter: /.\.s[ac]ss$/ }, (args) => {
            const path1 = args.resolveDir.replace('/dist/esm', '');
            return { path: path.join(path1, args.path) };
        });
    },
};
