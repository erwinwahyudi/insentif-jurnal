import React, { Component } from 'react';

import { Select, Divider, Container, Segment, Step, Grid, Icon, Form, Input, TextArea, Button, Label } from 'semantic-ui-react';

const Jurnal = () => {
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
                                <Step>
                                    <Icon name='upload' />
                                    <Step.Content>
                                        <Step.Title>Upload File</Step.Title>
                                        <Step.Description>Upload kelengkapan jurnal</Step.Description>
                                    </Step.Content>
                                </Step>
                                <Step>
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
                            <Form>
                                <Form.Field >
                                    <label>Nama Jurnal</label>
                                    <input placeholder='nama jurnal' />
                                    <Label basic color='red' pointing='above'>Please enter a value</Label>
                                    {/* <Form.Field id='form-input-control-first-name' control={Input} label='Nama Jurnal' placeholder='First name' width={16}/> */}
                                </Form.Field>
                                <Form.Field label='Kategori Jurnal' control='select' width={10}>
                                    <option value='nasional'>Nasional</option>
                                    <option value='internasional'>Internasional</option>
                                </Form.Field>
                                <Form.Field>
                                    <label>ISSN</label>
                                    <input placeholder='ISSN' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Penerbit</label>
                                    <input placeholder='Penerbit' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Nama Jurnal</label>
                                    <input placeholder='nama jurnal' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Judul</label>
                                    <input placeholder='Judul' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Bidang Ilmu</label>
                                    <input placeholder='Bidang Ilmu' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Author</label>
                                    <input placeholder='Author' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Vol/No/Bln/Thn/ diterbitkan</label>
                                    <input placeholder='Vol/No/Bln/Thn/ diterbitkan' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Abstrak</label>
                                    <textarea></textarea>
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
 
export default Jurnal;