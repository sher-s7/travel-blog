import React from 'react';
export default class About extends React.Component {

    render() {
        return (
            <section className='section-about'>
                <div className='section-about__headshot'>
                    <img src={this.props.headshot} alt="headshot" />
                </div>
                <div className='section-about__text'>
                    <h2>
                        A little about me
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis cursus volutpat. Phasellus viverra tellus dapibus sagittis pellentesque. Nulla at vehicula urna, id vestibulum libero. Nullam condimentum, magna nec faucibus lacinia, erat diam facilisis augue, et sodales urna nulla vitae felis. Phasellus consectetur sagittis nunc. Duis laoreet viverra lacus, vel convallis tortor lobortis et. Nulla facilisi. Vestibulum hendrerit tristique nunc, nec finibus nisi vestibulum non.
                    </p>
                    <p>
                        Ut at elit consequat lorem tempus maximus. Suspendisse sed sagittis urna. Aenean feugiat molestie mauris, quis laoreet enim elementum nec. Phasellus condimentum pellentesque hendrerit. Mauris finibus, nisi in pellentesque finibus, justo augue accumsan sem, quis consequat est ex nec dui. Proin viverra mauris aliquet, convallis leo at, blandit felis. Vestibulum eu faucibus lorem. Mauris quam justo, pellentesque non ipsum eget, gravida eleifend orci. Aenean elementum odio velit, a finibus libero tincidunt eu. Donec sem diam, consectetur eu tellus ac, vehicula aliquam dolor. Praesent commodo sed nibh vel dictum. Praesent ut neque lobortis, porttitor erat euismod, feugiat purus. Praesent mattis, lacus eget sollicitudin vestibulum, nisi lectus feugiat urna, at tincidunt velit felis nec ex. Curabitur efficitur nisl mi, ac posuere est elementum in.
                    </p>
                    <p>
                        Maecenas sed purus a mi rutrum lacinia. Fusce non sapien in nisl aliquam finibus sit amet ac orci. Cras et lorem quis ex ullamcorper vehicula vitae a sapien. Nulla facilisis odio libero, elementum porttitor justo facilisis a. In lacinia vehicula nunc id fermentum. Pellentesque gravida elit eget semper lobortis. Vestibulum vitae arcu sed neque elementum gravida nec sed erat. Pellentesque eget volutpat metus, a dictum est. Aliquam erat volutpat. Nam id elit mattis, euismod neque in, viverra mi.
                    </p>
                    <p>
                        Integer ullamcorper ligula eget quam auctor placerat. Etiam aliquam sagittis enim id euismod. Vivamus tortor leo, vestibulum eu tincidunt et, mattis sit amet lorem. Aenean at pellentesque massa. Quisque mi mauris, blandit eu vestibulum sit amet, sagittis ut ante. Integer eget elit et risus vulputate lobortis sed a nisl. In augue orci, efficitur sit amet lorem eget, cursus condimentum mi. Cras scelerisque orci vel urna volutpat luctus. Etiam non mauris a neque laoreet commodo quis eu metus. Nam rutrum massa non convallis consequat. Integer urna nulla, rutrum a sodales eu, varius eget nisi. Quisque vel iaculis ante. Phasellus convallis nunc ac volutpat dignissim.
                    </p>
                    <p>
                        Vivamus ac auctor dolor. Morbi maximus lorem erat, id fermentum lorem commodo quis. Nam in ex maximus, dictum libero pulvinar, dignissim neque. Sed accumsan elit pulvinar massa sollicitudin, placerat accumsan quam volutpat. Quisque sit amet gravida massa. Vivamus dui diam, pellentesque eget tortor ut, commodo imperdiet ipsum. Quisque tincidunt ipsum lorem, id placerat ante efficitur eu. Nulla facilisi. Suspendisse nec maximus ligula, non aliquet mauris.
                    </p>
                </div>
            </section>
        );
    }
}