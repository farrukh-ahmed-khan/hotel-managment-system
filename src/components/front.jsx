import React from 'react';

const Hotels = () => {
    return (
        
        <div style={{ padding: "10px" }}>
        <div>
        
        </div>
            <h3 className='heading'>Hotels</h3>
            <div className="images" style={{ display: 'flex', justifyContent: 'space-evenly', padding: '20px' }}>

                <div className="img1">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="http://cdn.home-designing.com/wp-content/uploads/2018/08/modern-platform-bedroom-sets.jpg" className="card-img-top" alt="..." height="180px" />
                        <div className="card-body">
                            <h5 className="card-title" style={{ marginLeft: "30px" }}>Card title</h5>
                            <p className="card-text crd">
                                <ul style={{ listStyle: "none" }}>
                                    <li>No. of room: 1   </li>
                                    <li >Per Day Price: 4000 <i class="fa fa-money fa-x" aria-hidden="true" style={{ margin: "10px" }} ></i></li>
                                    <li>4 beds <i class="fa fa-bed fa-x" aria-hidden="true" style={{ margin: "10px" }}></i></li>
                                </ul>
                            </p>
                            <div className="btn btn-primary" style={{ margin: "10px" }}> Book Now</div>
                        </div>
                    </div>
                </div>
                
                <div className="img1">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaIeEnurmhVgco9zSLKEinVdClaVugAVEvgQ&usqp=CAU" className="card-img-top" alt="..." height="180px" />
                        <div className="card-body">
                            <h5 className="card-title" style={{ marginLeft: "30px" }}>Card title</h5>
                            <p className="card-text crd">
                                <ul style={{ listStyle: "none" }}>
                                    <li>No. of room: 1   </li>
                                    <li >Per Day Price: 3000 <i class="fa fa-money fa-x" aria-hidden="true" style={{ margin: "10px" }} ></i></li>
                                    <li>3 beds <i class="fa fa-bed fa-x" aria-hidden="true" style={{ margin: "10px" }}></i></li>
                                </ul>
                            </p>
                            <div className="btn btn-primary" style={{ margin: "10px" }}> Book Now</div>
                        </div>
                    </div>
                </div>
                
                <div className="img1">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFhUZGRgaGhoYGBwYGhgaGBoaGBoZGhgaHBocIS4lHB4rHxoaJjgnKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrISE0NDQ0NDE2NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0Nf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAADBAUGAAECB//EAEkQAAECAwMHCAUKBQMEAwAAAAEAAgMRIQQSMQUiQVFhcfAGMnKBkaGxwRMjQmLRFCQzUnOSssLh8QdDgqLSFRaTNFOD4mPD8v/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAJhEAAgIBBAICAgMBAAAAAAAAAAECEQMSITFRMkETYXGBkcHhIv/aAAwDAQACEQMRAD8AguUfNh/1/kUIBxoKm+UAzGf+T8ihWj9vMLI1RsCo4OBRnDDehDEcaEZ+jekMxpnt2DBFac09aCD+w80VnN7UBZs8cakxdS0+PhsTIKBAnwxNO2PKUdgF2I6WpxvD+6cupKRDXqRYWAQBO2blfEbR7A7awlp7DMHtCmrJyts76OeWH3xIfeq3vVGiETQnih44KAo9ag2pjxNrgRrBBHaEYSK8lYXMzmOLTraSD2hSdj5Q2lmLw8e+K9oke1VqFR6OWrgsVWsvLFuD4bm7WkOHfI+KmrJl6BEo2I2eo5rux0impC0jjmIbmJgPB0rCEJioruV4ERzmta0lusYT26l3ZMmBki7Od3Dd8VNOYsYxsxeMhpIqVQhEhczTEVgnRBc1MRwSuSUtGtjQbrJvdqZXtOCMzJEd4vRXiCzUOcR4+CiU4otRbAWi3MZSc3fVbU9errWWexWmPUD0TPrOoe0+SBG5RWCym5AYY8UfUF8g7TzW9p3KItuWLfaaueLMw6Gmb5dM0H9IWbk39GkYIsMYWCx1ivD34gGZJOxgzndiQtnKm0xRds8IQmaHPEqbIY/MepQeT4LGsa4NBeQC57s5zjpMymnEnEzUUXsLvsrXuvxoj47/AHjmDc3mjqCYEQgSaA0bPitBq2nQaujm6tra3JUIguVH0bem3zUJKinOVP0Tem3zUO4UCiRURvIjKv3jwVkgMVfyIOfvHgrRYGzvdXmtY+KMpeTCSa0TK6D26lt7Ek9rgZDBMKI7lDzGb3//AFqEB40hT3KBuZD3v/IoO5++kJCRgNRxoKI8Yb/IrhrKjgYFGeMN6QHI1S6h5ojOaevzWNH7aetFYM09fmgAV3jzCbDSuGt48wnGsQMSiCq7YaBFiMqjiM40lDeNs7/Yyfemk3wS2lyIvx6ly53HGITkS57UJ7T7jmuP3aIT4cM+2Wag9jm9+Celr0GpMwmh3LUM48a0b5MSMwtd0XAoXoXNJvNI3hSM2QuHQwVu8smgAtntcVnMiObsnMfdNFKWflXHZz2teNk2nzHcoaa4egC4WblfCdR4cw+8JjtbPvkpSDlSG8Ta9pGsEEfovNnNQXMCdsWk9GOWGPdcggxX6mc0b3fCa7j2QBpfa47WMFSxhHY4/qvMYuUHwAXw3XX4T2GhppUbGt0R8y95efeJMtwwHcobkzSMUemnla0C5YLPPR6R82s3gkXndQChrWyNHM7TaHP/APjZms6wDndZQciO9RDBPsimhSTWhKqK2AQILWC6xjWDYBNdka670a6tOahA2xWxDMZuCMh2JuYzcEe6qEcLF1JakgDS05dLl7qIJIHlNP0bem3zUUTMKU5TO9W3pt81FSUSNIklkMc/ePBWewmQcdQn4qs5D9vePBWaxc1+7yK1j4mUvI5ydlFkdl9h3tPOadR+KMQvN4EV9ncIjDTSNhxB1heiWaJfY12F5rXS1XgD5pc7jaojuULfVw98T8ig+J/FWDlEPVw97/yKBI40FMk5aKjjQUaIMN64Y2o8E1cwSGDYzjSUxBgZvb5o8CBxpKk7NZhLDWlYxGFZJ6PhvClGWBMQYY4w/QqRYAk2NIhYmTqqBjWeRIlWZoM447Jq9OkVAR5zIk+UzgDLHWaKo7kz2K+bzMCW9ZB7FjbS8ae4TPXipOJmzALRPESF49bRPvSsRjhUsbvJBd2vJK1X7Mm/wKGM085jd4EnHe4zRGWoDB0Rmxrrw675NNwXV1p/lv35z+zABDlDOBcDt+DfijfsX6D/ACieL2O2Ohy7XC6t0PsA/ZxJ9zh5pX0DTg8T208VnyN2iTtxmlX0PV9hnMHvjpMJ72EhclhM5FpljIidKmhrguHQ4jaTcNgJPcEeC55eA/GUQCYAPM2YpOKKUn9CrihuKeiwtiTiMUFkRlXm9Y8UozDj9k3lPDrSYw480mXEt2ST6lnRCkGO1KPySPUs6IT4agkK2MUQWgaQgBacEqHYSwPBYyugJmairJzG7gjXjrKKCxxxCG6KNaXIWmsToLCujDahviT0LsMC2GhAiB5SO9Wzpt81HuwUnyp+ib02+ajA6imRpAkcie3vHgrRYRmv6PkVV8iYv3jwVryfzX9HyK0j4mUvI89tzfUncPJeiWCB6mD9lD/CFT7dZJWVzvdHiF6lZsmzgwDL+RC/CFGPdGmVVRTOUTPVw98T8igwzZ1aDuVl5Rs9XC3xPyKDbD/b4KnyZoFCh1HBUg2HguITKjgptIaCw2S4qnIZp2pFrkeG6iAGmv40fum2PUe13HGlONSGgrnqHiRjM5hNTpA+KlX4qGiMEzUipxLjp1XgnEUjo2kyreHRDj5BKRQJzF1p1vDAe0zKL/WeoN85rg9L736NWiM6FCXO+q/7xb3SasfEfg5tNQe0DsqV1Ggg4vZ91x8UsIAHNIHW1vnNUmS0ggIP8sgbGeZC1KGfZlvvT7iUMQXfXadl9zu7BNQmv0X5bGtHiAiwo7hQaZrnbg4geAT9lsueyYnMmtNIGMtaXabuJI6UimbFaZvaL08TK6QDTXs81LKSH7Zk4EUVZt1mLSri+IonKEIOCzTNWiiZUbTrSTTSndLyUtliDLtSDYZI/wD1+gQxx4LVkWHOCzohPlhRMgQB6CH0AnokEJXuKiKK5vJuLCSr2JiF7JzG7gilc2EZjdwRHhMDHYLgOXbsAhIEdXiuS8rRK5442IAiuUhnDb02+eCTcKJvlH9G37RvmlntookaQHciYu3jwVsyWJh/R8nKp5ExfvHgrhkNk7/R8nLSPiZy8itZYpZHAH2G+LV7BkQ/NrP9jD/CF49lx3zZ1PZHiF65kY/N4H2MP8AUYPZrn9FI5Rs9XD3xPyKBDeNIVi5R/Rw98T8ir7j++lU+TNcG24jxRnOQGmo8UV+jekB2x37/AATEM07Us3j9EeHh2oAMw8fFOsckQ4Y9/wAUVtqZ9dvaEANudVQz21MjKpwDf8U+61M+sO0Lg5Lca+mhyNeeAa/0px+hS25RHOLvru8PBCe46+2Z81JHJD/+7D/5B/guTkd3/chnfFA8GKv2T+iLLz7v3Z+JQn/0nqClf9Fd9eCf/Mf8Fn+jP+tB/wCY/wCKAIloH1R2lGY/3R2lP/6O/wCtB/5f/VZ/pD/rQf8AlQAs153bppyyvJe3HTjKnesbkqIPag9UREZZnseLz4cpOOa6Z1a9aQ9iRiOUfGeivtDPrDtCVjlQWyEy3Dm2e0eKhXCWjw83Kcyqc09XioJ8tnaPgh8lR4L5kR3qIfQCec9R2RD6iH0Am3hFE2Y8TScViZPGCC9qYiPsgzG7giPKyzNzG7gtPHHHigRt2AQSao7zmt6+CgPFezgpiZrjjYsaONfwCzj91jeNZ+ATY0R3KS76JshW+2vbQJKI2ib5Qj1bem3zwS8ZZyNYDORBV+8eCuvJ4fSdHycqXkT2948FdeT+ETojwctI+JlLyKnl7/pn0IzR4tXrORv+ngfYw/wheS5efOzPmSTdGO9q9ZyMfm8D7GH+ALPFw/ya5/RT+Uf0cPfE/Iq6T+481YeUf0UPfE/Iq73eBVPkzXB00VHAwR3igQWYjR4YFHeKDegDTATp2bAisdRLxrwBuXZiudO6NeGlVnlBGiNE3OAMm3bt4SmXTxONPBCVg3RZsoxB6J8nCd0jHXRHttrFkhwHiGyJ6RrudOQuXPq9JUuzZVjOaGh75FzgTfdQNayWnWfFFe4+iAdnSixJXnRKTZZyZXXDGemaU8VtN8DhlaTS9lj/AN8PvSFmgSlPmv1j3lw/lzFvSFns4EieY/WPfVWLxfGYOadL9YrV00GJEaHeyBI+I1p/FAPkn2Ww8to16XoLPhP6N2vpLj/eke8R6KBSX8s6Z+8qxDgue7MYXiXssLhjsBTkLIsdzjKzulISmwDXrkj4odC+WfZMDlrHr6uBjL6P/wBkIcubRdncgTp/LGzaloHJe1mcoIFdLoY81t/JW2tZK5hKjXs2bQn8UOg+SXYx/vi0EjNgacIbdm1dHlrac7NgiWEoTdQ1qObkS2FwBY9uOc54ujDS0lTVn5HuM79pxxDWk6AMS7yR8cOkJ5Jdiv8AvS1TFYf/ABM1dFcu5aWuXOZjohMwmPdU0zkZZqXo8QkaiwbNLSuY3JGzSk18Wc5zvMOnVdR8cOkHyS7ZF2XlJaYsRkN7m3XPY0+rY2hNa3aKaJoNw8FF2fkzcise2JeaHtcWuYQZNINHAkT6lKCC+QzHUGoqdKi9kVqco7sispYKEtAI1/3qcym0jEEbxLxUDaDql3eRR7Lj4l3yG71DDqY1OOinWo/Ih+bs6DfEJ5oGtMzbYJ8R2tDMV2spiINqWe9OhWxazRHXG1OAWPnJasr8xu4IhM+OKpiBuM2jZPjaufSADin6ojj+3wXBkgDgvGrjau2OHGn9Fq8NQ7BT4rCBx5oAi+Ur/Vt6bfNLOMwico/o29Nu7TguZUWczXGHyLi/ePBXXIWETojwcqbkQVfvHgrnkQUidHyctI+JnLyKdl0/N3dEeIXrGQ3fNoH2UP8ACF5Blx/zd24eIXrGQ3/NoH2UP8IUYTXN6K1yj+ih74n5FXNmGw4dSn+UL/VQ98T8ir4E6dxxTfJnFHTMR4dRTV0mWOOhDs8POaNuBxwPci2uz2gPHowbshhd51Z4nUpci9I1CyW9zSZSABO4ATPWphn8P4MYTjTduLm4EywO0pPJtktIq+YbJ5dN4JAkSJgTnqxV8s9pAaspTa4ZWn6KpE/h5Y2Q3XWuBAcee+YMhoJ90dig+VmSILIFnuMYyjyc1lSQyZMxU0FV6FbLTNj5VzTQ84UPaOKqmcri50Oz3WFzgHzAYXEUZsmP0WfyPWty4w/5exScj8nYlqjGHADCQwucZMa1ovATMhj3qyv5DxLKL77kR8sJinRa6U98iVnJu2xbO575kPey5cewgtAIcHiemspSQMs5d9GQJ33vIDS505k4E6f2XZFtqzmkqdEk1sS4LobeOM8G7EJ1ljmU4jG66ld5OeHgZ5e7TOldg0BSjWtGJVkEWyxvH85x6LXHwTAsIdKbonVdHc5OOjNGifWgPtepoQBpmSWNqL/W8+S6MENwA7z5pd9pecO5CdFfrToVjBGuQ3N+K2I0tJ7AEk5+1ckjWUUFjzrQDiCf6yPBLxHwzjP77ilXPG3tXJjbAigsI70WrHYSO9JWjJtmfjCnuvN8CjutG7sQnxiikPU0Gs4YxgY1r5ASE5GgwXZiDUUk+06yhOtARSDUyQc/iiBEKSfapITrYihWGsxzG7giE8caErBtOcG0rgmp8cYlIZonjjBYTx8Fua5KANXuNXxWX/2+K1x+y1x+qAIvlEcxvTbu0rrQuOUP0bem3dpWxOSyyG+LgdyEOfvHgrlkYZsTo+TlT8gDn7x4K5ZIGa/o+TlcfFES8jz/AC2PUO3DxC9VyG/5vB+yZ+ELynLh9Qdw8l6fkN/zeD9kz8IUQ4NM3ormVo3pGMYxrjdLyTQDOuSxIPslKQbA84gy23ZjrBUYLfE+t2ABcutTzi93aVzSlJm8YwXos8CwkSvPFDMTOwjVtTEe1BgFyJBJ03nyl2EzVKa6ZPVrOhEAUaZXuzTVGqSLLFyu8ggx2jo3jLsZXtXQy8wYviE+6Pi4SVVfGY3F7RvICH8sYcDe6LXO8BJXpbRntZdW8smsaGthOdLS99e4JSPy1jHmw2N6nHzVSfaj9Vw6V1o7zPuSUa3jS5g/qLz2NClYL9Dc0ichZQe95BdU3nTlOuMqqv2gRHxAWML7hM5aJaZbl3ky2h0ZovAzvDmloq06ScU5JzX32UcD2jS0rdSlB0+jNwjNWux/I+UDi01wIw1YqwWW13zI4qBiWcRW+mhC69v0jPrSx61vJ9tvVBlr1z1HUtYT1fkwyY3F/RaLwGFVq/qSUONQTK7EWvitLMgz3HSUB5WokakyerDxklYlqHHBTsVBnPCF8okdHG5Jx7ROvBShtAmRPfuTGSz44S0SOo2Jb266BJRMrM0Ge6p7lIEsbUtRLXxgoP5VEdVrCNRcQAhuhvxfEDdww6yk5peylCT9EtEtY1pSJlRopemdQqewKPayHrc87Lx/RHYx0s1jWbTj2N+Kl5PopYjp2UHu5rHddPFCiPiYuc1g2lF9CTznk7G5o7qrtkFgwaJ68T2qXkLWNC8GM4ODmue4jCQut7SrFkq032m+4B8+bMYaJKFLwNKtXJPJsGPBeYjGPBfmkhriJCR2tqiLcmKaUYg3Q9XV+iG5h489ql43JKH/AC3xIfReS37r5hIRshWtnNiQ3gYB7S0/ebMdy2pmOpCxaeMepc+XE1qIbQzn2Z+0wy147BIjsS7crQSZOdcP1XhzD/cEqYbCXKEerb027tKI8yHUs5QFphNLSDntwNNOCddY4YYwvikOe2bWtY55O67isMr4OjFwc5Afz948FdMkHNf0fJypdkyPGa910OLZi6ZFpIlpBwqrdkKyxM4PBaCAKkbdWK0i6iZy3kU215PjWiGWwYZeZCcpAaNLiBNX/JlkiCDCa6jmsY0ieBDQJZtFLWaysYwMYAABKgl1pxkESU45LdFSd8nhb7S4Yta3pvaO4TQnZQAxisHRa5x7Va7F/C4nnxPusJ73EKwWL+GVmbzrzuk4AdjQhQiP5ZHl7sptnR0V24NYPitNjveZNgOd0nPf3Be32PkVZWYQmdbb3e6amYGSoTMGjqkB3KlFdEucuzwWzZGtz+ZADNtwN73KVgchbfE50S6OkfBokvcGQWDBgXXpJJ0LU2eTWT+E5NYj3HjWSp+xfwvsrecL3SJ8pK9GKl7Q8lpANUnYitx+RthuFoa1pFQW5ppovYqkZVsjYMUtxa6rCe8FXq0lwxBHUq/l6xmJDOaZioNeyfUsZJtm0GkVe+WOvsx9oD2h8fFZaoYcPTQsfbaPaHk5Cs7jgcRj5HjatiIYbr7atPPbq94eY696p3a5NdmqfAaDlBjmDOGOugMqtOo/FH+Xta0XnVxuipMyl4+SYMUX2m7PEgy7ZGSirRYJUFoddEpNaATTWRj1rSOWL5MJYWuCStGUQJlxkTgJgSGsqIi5bE5MBOuSWiwoDTN7i93vGf8AaF2y0f8AbhHeQGjvVvJ0v6JWLtm32mM/mtltNANg09a5+SvIz3gDE3cT1lGuRnYua3oiZ7St/IWmriXdIz7sFm8j7/g0WNCpbBwLi46qu7hREYXYMhSGt0m9wmnWQ2twAHcsc9Q53/pajQp6B55z5bGDzK22yNFZTOt0ye9Ge8DSlX2xuAzj7te/BCcnwGy5GeKIb3pWJaHaZMG2ruwfqgNJfzWOd7zub2YKowbJlNIaNqGibtwn34IL7SZyJDdgznfAI7clRXNm50vdA0acf1RbJZWsODQ7EGV6m3UVosaRm8jfArAs7nGZYSPfOPwG5WrJlrfCGZmNJE2tAM5a51KXsrC+ZaNZIJAnLwCPZywHCs9B06/01rRJIhtvknYXKB4q5gcMZtMjLWRVSdmyzBfS8Wn3gR34KHsDS7EDClcZz0yB7kY2VlSHFrhomJFOxaUWJjWPEwQRskUOPkxjxJ7WuG0A+Kr0C/XWcCyhdLDDDSrBZr4q51Jc01kZa5oslxIe08ibI/2LnQJZ3CncpOHkRjGsaz2W3ZmriNrsU6YiMxwMtujdj5KZJSafQ06VCLbBtRodmcJpi+JdeuehGY4TdTD4yT0hqYpALga6inIUZ0lyWAmk5Tr2yRWASG5QoVJseslmhdLkFbmromzsFY5y5mtTToDC9akSsmtF6TGmbDDLFAtUZjAHPcGgmVdJRmumkst2URILm6ZEiU5gjDBTRSYhE5RwBgSRUzGAkQJ69Kico5ddEY4NawNpIkzca0I0aO8KEewtbRjiTQzut1zmBUYAU2JN0pANYQ7A3Zym2ou1OriSKHsQWULzYhJ0zwOmdRgKHFYyJOqmrU1j2yrrdNtQa1mDQzrLaoC4WGunVhM6dx8d6ynH2a45Xsc2iC72HBrTOYIndPu7NiALBPnvc7ZOTewJ4lckrPUzWkCh2Zjea0Dx7UXcENzwl4luaDKczqFT2BLdhshtDLx+yTMd7sGho1ux+6PilI8Vo5znPOoc3sFFSg2S5pD0S2NwBmdTanuwQHx3Y0YNbjM9gogwBFebrGBspYist36J6zZBLhN5c44aRjUGtVrHF2ZPL0RUSO0mQvPP9vYKdy6ayK7U0ah+itVnyOxjCKsNZdYxJnVZBs9bgAFNIEtenf3q6SI1NkPYMnsZnPzjtnTadQ3qRDaZrHXa4GokBgDoqE3acnulMGeiWgynXbXRtQTCea1bolWoA7iAnYqFIL3tE3UAmJXamZ3bZJ75I/2bucaU7Ca5qJDyfOV54zgZVxA0GlDguoZiMIDaaZyEiNEwBs70wB2bJ8RtXAzJlmnRpH67UwLKLwLQ7GoxE9RBPw0o7zEOa1zRIE4DEynt3bExYLNaXkgBt2ec8gCdZYDnGQ/ZIBYCtbzDzQBTRMUqBoCl7Bkh7yXPIuuFKEOkcVM2exNbU5zhpOjcMOvFNTSsBazWRjGhrBKWskntK7cUUlcOakAF7l01+HWeOxaeFpwIluolL0gQVr9Esd1O5GZENcK7BVJNd3IsI4oqXYtjv5S6hrQzGGnHRVMw4lBuCQaJ4Aa9OhOMwG4KovdiaJ9xotTWLFoI2HLC5YsQBqa05yxYpAxjyunGYksWIGef5ZgXHkSu3ZhmaSccJj2TXEaCg2SAbkxgZyMwbt+lW69FfgtLEho7fBkD6sk1vOpdMxiZ4y0depVnKdkeM4BzmSlVtSNIpKZmdHktLEpcFR5IuPaQ2jjXRQkns060s6O93NbIa3f4iqxYsGkjoYrFc323lx+qKDsHmuYcVzs2DDHVKegLFi3UVRjKTRJ2fIERzb0V39JqQdFAZalOWXIENsroaC4AG9VwEic3QCsWKjNjsMFkpAulM0GzAgaJqQY8xWOAZIyIpKfVtnPrWLEAFgZPdcAdpnMmWFJTlp0U81HWqxYtMhzSC0c2U552gHatrEhoNByQbrJuFagEgGV3A7zPsWnWRpaW1EiTQGU5bcaE18gtLEDFo8EtLg1gq0SzaSvCZ380y1d7Fksr4lG1lKraFpIqDOksaHWsWJAS9g5OsYbz5PdOY1DqU01stCxYgRhWi2a2sQByWLgsKxYmJg3hdRGTDZalixZZHTQ4+wFwosHStrFtexLNQW16inIYzW7gsWLCDuUipcI//9k=" className="card-img-top" alt="..." height="180px" />
                        <div className="card-body">
                            <h5 className="card-title" style={{ marginLeft: "30px" }}>PC Hotel</h5>
                            <p className="card-text crd">
                                <ul style={{ listStyle: "none" }}>
                                    <li>No. of room: 1   </li>
                                    <li >Per Day Price: 2000 <i class="fa fa-money fa-x" aria-hidden="true" style={{ margin: "10px" }} ></i></li>
                                    <li>2 beds <i class="fa fa-bed fa-x" aria-hidden="true" style={{ margin: "10px" }}></i></li>
                                </ul>
                            </p>
                            <div className="btn btn-primary" style={{ margin: "10px" }}> Book Now</div>
                        </div>
                    </div>
                </div>
                
                <div className="img1">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="data:image/jpeg;base64,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" className="card-img-top" alt="..." height="180px" />
                        <div className="card-body">
                            <h5 className="card-title" style={{ marginLeft: "30px" }}>Mirot Hotel</h5>
                            <p className="card-text crd">
                                <ul style={{ listStyle: "none" }}>
                                    <li>No. of room: 1   </li>
                                    <li >Per Day Price: 1000 <i class="fa fa-money fa-x" aria-hidden="true" style={{ margin: "10px" }} ></i></li>
                                    <li>1 beds <i class="fa fa-bed fa-x" aria-hidden="true" style={{ margin: "10px" }}></i></li>
                                </ul>
                            </p>
                            <div className="btn btn-primary" style={{ margin: "10px" }}> Book Now</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Hotels;