import { DockerPlain, GooglecloudOriginal, JavascriptOriginal, PandasOriginal, PythonPlain, PytorchOriginal, ReactOriginal, SassOriginal, TensorflowLine } from 'devicons-react';

function IconList() {
    const iconSize=70
    return (
        <div className="icons">
            <div className="icon-card">
                <PythonPlain size={iconSize}/>
                <label>Python</label>
            </div>
            <div className="icon-card">
                <JavascriptOriginal size={iconSize}/>
                <label>Javascript</label>
            </div>
            <div className="icon-card">
                <ReactOriginal size={iconSize}/>
                <label>React</label>
            </div>
            <div className="icon-card">
                <SassOriginal size={iconSize}/>
                <label>Sass</label>
            </div>
            <div className="icon-card">
                <TensorflowLine size={iconSize}/>
                <label>Tensorflow</label>
            </div>
            <div className="icon-card">
                <PytorchOriginal size={iconSize}/>
                <label>Pytorch</label>
            </div>
            <div className="icon-card">
                <PandasOriginal size={iconSize}/>
                <label>Pandas</label>
            </div>
            <div className="icon-card">
                <GooglecloudOriginal size={iconSize}/>
                <label>GCP</label>
            </div>
            <div className="icon-card">
                <DockerPlain size={iconSize}/>
                <label>Docker</label>
            </div>

        </div>
    )
}

export default IconList;