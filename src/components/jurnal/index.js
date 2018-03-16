import React, { Component } from 'react';

import { Divider, Container, Step, Grid, Icon, Form, Button, Label } from 'semantic-ui-react';

import Auth from '../../utils/Auth';

class Jurnal extends Component {

    constructor() {
        super();
        this.state = { namajurnal: '', kategorijurnal: '', issn: '', penerbit: '', alamatsitus: '', judul: '', bidangilmu: '', author: '', vol: '', abstrak: '' };
        this.handleNamaJurnal       = this.handleNamaJurnal.bind(this);
        this.handleKategoriJurnal   = this.handleKategoriJurnal.bind(this);
        this.handleIssn             = this.handleIssn.bind(this);
        this.handlePenerbit         = this.handlePenerbit.bind(this);
        this.handleAlamatSitus      = this.handleAlamatSitus.bind(this);
        this.handleJudul            = this.handleJudul.bind(this);
        this.handleBidangIlmu       = this.handleBidangIlmu.bind(this);
        this.handleAuthor           = this.handleAuthor.bind(this);
        this.handleVol              = this.handleVol.bind(this);
        this.handleAbstrak          = this.handleAbstrak.bind(this);
        this.handleSubmit           = this.handleSubmit.bind(this);
    }

    handleNamaJurnal     = (e) => this.setState({ namajurnal: e.target.value });
    handleKategoriJurnal = (e) => this.setState({ kategorijurnal: e.target.value });
    handleIssn           = (e) => this.setState({ issn: e.target.value });
    handlePenerbit       = (e) => this.setState({ penerbit: e.target.value });
    handleAlamatSitus    = (e) => this.setState({ alamatsitus: e.target.value });
    handleJudul          = (e) => this.setState({ judul: e.target.value });
    handleBidangIlmu     = (e) => this.setState({ bidangilmu: e.target.value });
    handleAuthor         = (e) => this.setState({ author: e.target.value });
    handleVol            = (e) => this.setState({ vol: e.target.value });
    handleAbstrak        = (e) => this.setState({ abstrak: e.target.value });
    
    handleSubmit (e) {
        e.preventDefault();
        console.log(Auth.token());
    }


    render() {
        return ( 
            <Container style={{ marginTop: '2em', marginBottom: '2em',  }}>
                <Grid verticalAlign='middle' centered>
                    <Grid.Row >
                        <Grid.Column verticalAlign='middle' >
                            <Step.Group stackable='tablet' size='small' style={{ textAlign: 'left' }}>
                                <Step>
                                    <Icon name='browser' />
                                    <Step.Content>
                                        <Step.Title>Form Jurnal</Step.Title>
                                        <Step.Description>Lengkapi data pengajuan jurnal</Step.Description>
                                    </Step.Content>
                                </Step>
                                <Step disabled>
                                    <Icon name='upload' />
                                    <Step.Content>
                                        <Step.Title>Upload File</Step.Title>
                                        <Step.Description>Upload kelengkapan jurnal</Step.Description>
                                    </Step.Content>
                                </Step>
                                <Step disabled>
                                    <Icon name='checkmark box' />
                                    <Step.Content>
                                        <Step.Title>Verifikasi Data</Step.Title>
                                        <Step.Description>Memastikan kesesuaian data</Step.Description>
                                    </Step.Content>
                                </Step>
                                <Step disabled>
                                    <Icon name='checkmark' />
                                    <Step.Content>
                                        <Step.Title>Selesai</Step.Title>
                                        <Step.Description>Pengisian data selesai</Step.Description>
                                    </Step.Content>
                                </Step>
                            </Step.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Grid.Row>
                    <Divider horizontal section>Form pengajuan insentif jurnal</Divider>
                </Grid.Row>
                
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Form onSubmit={ this.handleSubmit }>
                                <Form.Field  >
                                    <label>Nama Jurnal</label>
                                    <input type="text" onChange={ this.handleNamaJurnal } placeholder='nama jurnal' />
                                    <Label basic color='red' pointing='above'>Please enter a value</Label>
                                    {/* <Form.Field id='form-input-control-first-name' control={Input} label='Nama Jurnal' placeholder='First name' width={16}/> */}
                                </Form.Field>
                                <Form.Field  onChange={ this.handleKategoriJurnal } label='Kategori Jurnal' control='select' width={10}>
                                    <option value='nasional'>Nasional</option>
                                    <option value='internasional'>Internasional</option>
                                </Form.Field>
                                <Form.Field>
                                    <label>ISSN</label>
                                    <input type="text"  onChange={ this.handleIssn } placeholder='ISSN' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Penerbit</label>
                                    <input type="text"  onChange={ this.handlePenerbit } placeholder='Penerbit' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Alamat Situs</label>
                                    <input type="text"  onChange={ this.handleAlamatSitus} placeholder='nama jurnal' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Judul</label>
                                    <input type="text"  onChange={ this.handleJudul } placeholder='Judul' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Bidang Ilmu</label>
                                    <input type="text"  onChange={ this.handleBidangIlmu } placeholder='Bidang Ilmu' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Author</label>
                                    <input type="text" onChange={ this.handleAuthor } placeholder='Author' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Vol/No/Bln/Thn/ diterbitkan</label>
                                    <input type="text"  onChange={ this.handleVol } placeholder='Vol/No/Bln/Thn/ diterbitkan' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Abstrak</label>
                                    <textarea onChange={ this.handleAbstrak } ></textarea>
                                </Form.Field>
                                <Form.Field id='form-button-control-public' control={Button} content='Proses' />
                            </Form>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Divider horizontal section>. . .</Divider>
                    </Grid.Row>

                </Grid>
            </Container>
        )
    }
}
 
export default Jurnal;